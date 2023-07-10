// Function that dispatches and handles a custom event
export function handleAndDispatchCustomEvent(name, handler, detail) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, { cancelable: true, detail });
    if (handler)
        target.addEventListener(name, handler, { once: true });
    target.dispatchEvent(event);
}
