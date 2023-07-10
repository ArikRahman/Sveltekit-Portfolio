<script context="module">import { useActions } from "../../internal/helpers/useActions";
import { isMountedStore } from "../../internal/stores";
import { getAvatarRootContext } from "./root.svelte";
import { createEventDispatcher } from "svelte";
</script>

<script>export let src = void 0;
export let alt = void 0;
const dispatch = createEventDispatcher();
$: if ($rootCtx.imageLoadingStatus !== "idle") {
    dispatch("loadingStatusChange", $rootCtx.imageLoadingStatus);
}
const isMounted = isMountedStore();
const rootCtx = getAvatarRootContext();
function handleLoad(src2) {
    if (typeof window === "undefined")
        return;
    if (!src2) {
        $rootCtx.imageLoadingStatus = "error";
        return;
    }
    const image = new window.Image();
    const updateStatus = (status) => () => {
        if (!$isMounted)
            return;
        $rootCtx.imageLoadingStatus = status;
    };
    $rootCtx.imageLoadingStatus = "loading";
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src2;
}
$: handleLoad(src);
</script>

{#if $rootCtx.imageLoadingStatus === 'loaded'}
	<img {src} {alt} {...$$restProps} use:useActions={$$restProps.use} />
{/if}
