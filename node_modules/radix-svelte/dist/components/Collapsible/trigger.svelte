<script context="module">"use strict";
</script>

<script>import { useActions } from "../../internal/helpers/useActions";
import { createEventDispatcher } from "svelte";
import { getCollapsibleRootContext } from "./root.svelte";
const ctx = getCollapsibleRootContext();
const dispatch = createEventDispatcher();
</script>

<button
	{...$$restProps}
	use:useActions={$$restProps.use}
	on:click={() => {
		$ctx.open = !$ctx.open;
		dispatch('change', $ctx.open);
	}}
	on:keydown
	data-state={$ctx.open ? 'open' : 'closed'}
	data-disabled={$ctx.disabled ? 'true' : undefined}
	disabled={$ctx.disabled}
	type="button"
>
	<slot />
</button>
