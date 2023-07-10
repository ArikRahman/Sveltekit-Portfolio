import { handleAndDispatchCustomEvent } from '../helpers/event';
export const dismissable = ((node, params) => {
    let onPointerDownDismiss;
    let onEscapeKeyDown;
    let onDismiss;
    const handleDismiss = (event) => {
        if (event instanceof KeyboardEvent && event.key === 'Escape') {
            handleAndDispatchCustomEvent('escDismiss', onEscapeKeyDown, {
                originalEvent: event,
                preventDefault: () => event.preventDefault(),
            });
            if (!event.defaultPrevented) {
                onDismiss?.();
            }
        }
        if (event instanceof MouseEvent && !node.contains(event.target)) {
            handleAndDispatchCustomEvent('pointerDownDismiss', onPointerDownDismiss, {
                originalEvent: event,
                preventDefault: () => event.preventDefault(),
            });
            if (!event.defaultPrevented) {
                onDismiss?.();
            }
        }
    };
    const update = (params) => {
        document.removeEventListener('keydown', handleDismiss);
        document.removeEventListener('click', handleDismiss);
        if (params?.disable)
            return;
        onPointerDownDismiss = params?.onPointerDownOutside;
        onEscapeKeyDown = params?.onEscapeKeyDown;
        onDismiss = params?.onDismiss;
        document.addEventListener('keydown', handleDismiss);
        document.addEventListener('click', handleDismiss);
    };
    // TODO: This is a hack to avoid the dialog trigger being registered
    // as a click. We should find a better way to do this.
    sleep(1).then(() => {
        update(params);
    });
    return {
        update,
        destroy() {
            document.removeEventListener('keydown', handleDismiss);
            document.removeEventListener('click', handleDismiss);
        },
    };
});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
