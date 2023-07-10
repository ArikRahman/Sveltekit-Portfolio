<script context="module">import { useActions } from "../../internal/helpers";
import { getRadioGroupItemContext } from "./item.svelte";
</script>

<script>export let use = [];
const itemCtx = getRadioGroupItemContext();
</script>

{#if $itemCtx.checked}
	<span
		data-state={$itemCtx.checked ? 'checked' : 'unchecked'}
		data-disabled={$itemCtx.disabled ? '' : undefined}
		{...$$restProps}
		use:useActions={use ?? []}
	>
		<slot />
	</span>
{/if}
