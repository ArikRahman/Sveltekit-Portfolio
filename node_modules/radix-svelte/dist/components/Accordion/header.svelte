<script context="module">"use strict";
</script>

<script>import { useActions } from "../../internal/helpers/useActions";
import { getItemContext } from "./item.svelte";
import { getRootCtx } from "./root.svelte";
const rootCtx = getRootCtx();
const itemCtx = getItemContext();
$: isOpen = Array.isArray($rootCtx.value) ? $rootCtx.value.includes($itemCtx.value) : $rootCtx.value === $itemCtx.value;
</script>

<h3
	data-state={isOpen ? 'open' : 'closed'}
	data-disabled={$rootCtx.disabled ? 'true' : undefined}
	{...$$restProps}
	use:useActions={$$restProps.use}
>
	<slot />
</h3>
