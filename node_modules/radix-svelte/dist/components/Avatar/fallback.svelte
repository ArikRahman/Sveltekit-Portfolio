<script context="module">import { useActions } from "../../internal/helpers/useActions";
import { getAvatarRootContext } from "./root.svelte";
</script>

<script>export let delayMs = 0;
let canRender = !delayMs;
let timeout;
$: if (delayMs) {
    if (timeout)
        clearTimeout(timeout);
    timeout = setTimeout(() => {
        canRender = true;
    }, delayMs);
}
else {
    canRender = true;
}
const rootCtx = getAvatarRootContext();
</script>

{#if canRender && $rootCtx.imageLoadingStatus !== 'loaded'}
	<span {...$$restProps} use:useActions={$$restProps.use}>
		<slot />
	</span>
{/if}
