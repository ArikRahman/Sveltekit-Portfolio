import { tick } from 'svelte';
function getFocusableElements(container) {
    const elements = Array.from(container.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return elements.filter((el) => !el?.disabled);
}
const getParams = (params) => {
    return {
        disable: false,
        autofocus: true,
        ...params,
    };
};
export const focusTrap = ((container, params) => {
    const handleFocusIn = (event) => {
        if (!container.contains(event.target)) {
            container.focus();
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            const focusableElements = getFocusableElements(container);
            if (focusableElements.length === 0) {
                return;
            }
            const currentIndex = focusableElements.indexOf(document.activeElement);
            let nextIndex = 0;
            if (event.shiftKey) {
                nextIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
            }
            else {
                nextIndex = currentIndex >= focusableElements.length - 1 ? 0 : currentIndex + 1;
            }
            focusableElements[nextIndex].focus();
        }
    };
    const update = (newParams) => {
        const params = getParams(newParams);
        document.removeEventListener('focusin', handleFocusIn);
        container.removeEventListener('keydown', handleKeyDown);
        if (params?.disable)
            return;
        // Autofocus the first focusable element in the container
        if (params?.autofocus) {
            const focusableElements = getFocusableElements(container);
            if (focusableElements.length > 0) {
                tick().then(() => {
                    if (typeof params.autofocus === 'boolean') {
                        focusableElements[0].focus();
                    }
                    else if (focusableElements.includes(params.autofocus)) {
                        params.autofocus.focus();
                    }
                });
            }
        }
        document.addEventListener('focusin', handleFocusIn);
        container.addEventListener('keydown', handleKeyDown);
        container.setAttribute('tabindex', '-1');
    };
    update(params);
    return {
        update,
        destroy() {
            document.removeEventListener('focusin', handleFocusIn);
            container.removeEventListener('keydown', handleKeyDown);
        },
    };
});
