<script context="module">import { useActions } from "../../internal/helpers";
import { getDialogRootContext } from "./root.svelte";
</script>

<script>export let use = [];
const rootCtx = getDialogRootContext();
</script>

<button
	on:click={() => {
		$rootCtx.open = false;
	}}
	{...$$restProps}
	use:useActions={use ?? []}
>
	<slot />
</button>
