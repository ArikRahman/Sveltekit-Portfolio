<script context="module">import { useActions } from "../../internal/helpers/useActions";
</script>

<script>import { getTabsRootContext } from "./root.svelte";
export let value;
const rootCtx = getTabsRootContext();
$: selected = $rootCtx.value === value;
</script>

{#if selected}
	<div
		{...$$restProps}
		use:useActions={$$restProps.use}
		data-state={selected ? 'active' : 'inactive'}
		data-orientation={$rootCtx.orientation}
		role="tabpanel"
		tabindex="0"
	>
		<slot />
	</div>
{/if}
