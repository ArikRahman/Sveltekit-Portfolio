<script context="module">const defaults = {
    open: false,
    contentId: generateId(),
    trigger: null
};
const { getContext, setContext } = reactiveContext(defaults);
export const getTooltipRootContext = getContext;
</script>

<script>import { Popper } from "../../internal/components";
import { generateId, isBrowser, reactiveContext } from "../../internal/helpers";
import { onDestroy } from "svelte";
import { TOOLTIP_OPEN } from "./constants";
import { getTooltipProviderContext } from "./provider.svelte";
export let open = defaults.open;
export let delayDuration = void 0;
export let disableHoverableContent = void 0;
export let use = [];
const providerCtx = getTooltipProviderContext();
const ctx = setContext({
    open: (v) => {
        if (v) {
            $providerCtx?.onOpen();
            document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
        }
        else {
            $providerCtx?.onClose();
        }
        open = v;
    }
});
let openTimer = 0;
$: disableHoverableContent = disableHoverableContent ?? $providerCtx?.disableHoverableContent;
$: delayDuration = delayDuration ?? $providerCtx?.delayDuration;
let wasOpenDelayed = false;
$: stateAttribute = function () {
    if (!$ctx.open)
        return "closed";
    if (wasOpenDelayed)
        return "delayed-open";
    return "instant-open";
}();
const handleOpen = () => {
    window.clearTimeout(openTimer);
    wasOpenDelayed = false;
    ctx.update((p) => ({ ...p, open: true }));
};
const handleClose = () => {
    if (!isBrowser)
        return;
    window.clearTimeout(openTimer);
    ctx.update((p) => ({ ...p, open: false }));
};
const handleDelayedOpen = () => {
    if (!isBrowser)
        return;
    window.clearTimeout(openTimer);
    openTimer = window.setTimeout(() => {
        wasOpenDelayed = true;
        ctx.update((p) => ({ ...p, open: true }));
    }, delayDuration);
};
const onTriggerEnter = () => {
    if ($providerCtx?.isOpenDelayed) {
        handleDelayedOpen();
    }
    else {
        handleOpen();
    }
};
const onTriggerLeave = () => {
    if (disableHoverableContent) {
        handleClose();
    }
    else {
        window.clearTimeout(openTimer);
    }
};
onDestroy(() => {
    if (!isBrowser)
        return;
    window.clearTimeout(openTimer);
});
$: ctx.update((prev) => {
    return {
        ...prev,
        open,
        stateAttribute,
        onTriggerEnter,
        onTriggerLeave,
        onOpen: handleOpen,
        onClose: handleClose,
        disableHoverableContent
    };
});
</script>

<Popper.Root {use} {...$$restProps}>
	<slot />
</Popper.Root>
