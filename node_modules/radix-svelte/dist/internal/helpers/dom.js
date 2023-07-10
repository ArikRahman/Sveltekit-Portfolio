export function focus(element) {
    if (isHTMLElement(element)) {
        element.focus();
    }
    else if (typeof element === 'string') {
        const el = document.querySelector(element);
        if (isHTMLElement(el)) {
            el.focus();
        }
    }
}
export function isHTMLElement(element) {
    return element instanceof HTMLElement;
}
