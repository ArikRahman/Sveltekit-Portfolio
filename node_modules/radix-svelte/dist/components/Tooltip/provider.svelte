<script context="module">import { reactiveContext, isBrowser } from "../../internal/helpers";
const defaults = {
    isOpenDelayed: true,
    isPointerInTransit: false,
    disableHoverableContent: false
};
const { getContext, setContext } = reactiveContext(defaults);
export const getTooltipProviderContext = getContext;
</script>

<script>export let delayDuration = 300;
export let skipDelayDuration = 300;
export let disableHoverableContent = defaults.disableHoverableContent;
let skipDelayTimer = 0;
let isOpenDelayed = defaults.isOpenDelayed;
const handleOpen = () => {
    if (!isBrowser)
        return;
    window.clearTimeout(skipDelayTimer);
    isOpenDelayed = false;
};
const handleClose = () => {
    if (!isBrowser)
        return;
    window.clearTimeout(skipDelayTimer);
    skipDelayTimer = window.setTimeout(() => {
        isOpenDelayed = true;
    }, skipDelayDuration);
};
const ctx = setContext();
$: ctx.update((prev) => ({
    ...prev,
    delayDuration,
    isOpenDelayed,
    onOpen: handleOpen,
    onClose: handleClose,
    disableHoverableContent
}));
</script>

<slot />
