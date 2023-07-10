<script context="module">import { useCollection } from "../../internal/helpers/collectionContext";
import { useActions } from "../../internal/helpers/useActions";
import { getTriggerCollection } from "./list.svelte";
import { getTabsRootContext } from "./root.svelte";
</script>

<script>export let value;
export let disabled = false;
const rootCtx = getTabsRootContext();
const triggerCollection = getTriggerCollection();
$: selected = $rootCtx.value === value;
</script>

<button
	data-state={selected ? 'active' : 'inactive'}
	data-orientation={$rootCtx.orientation}
	role="tab"
	tabindex={selected ? 0 : -1}
	on:click={() => ($rootCtx.value = value)}
	on:focus={() => {
		if ($rootCtx.activateOn === 'focus') {
			$rootCtx.value = value;
		}
	}}
	use:useActions={$$restProps.use}
	use:useCollection={{ collection: triggerCollection }}
	{disabled}
	data-disabled={disabled || undefined}
	{...$$restProps}
>
	<slot />
</button>
