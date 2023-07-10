<script context="module">import { getTooltipRootContext } from "./root.svelte";
</script>

<script>import ContentHoverable from "./internal/content-hoverable.svelte";
import ContentImpl from "./internal/content-impl.svelte";
export let side = "top";
const rootCtx = getTooltipRootContext();
</script>

{#if $rootCtx.disableHoverableContent}
	<ContentImpl {side} {...$$restProps}>
		<slot />
	</ContentImpl>
{:else}
	<ContentHoverable {side} {...$$restProps}>
		<slot />
	</ContentHoverable>
{/if}
