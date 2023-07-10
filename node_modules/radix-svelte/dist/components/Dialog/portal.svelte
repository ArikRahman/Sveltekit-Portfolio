<script context="module">import { Portal } from "../../internal/components";
</script>

<script>import { getDialogRootContext } from "./root.svelte";
export let container = "body";
const rootCtx = getDialogRootContext();
</script>

{#if $rootCtx.open}
	<Portal target={container} {...$$restProps}>
		<slot />
	</Portal>
{/if}
