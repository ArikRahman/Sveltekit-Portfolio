<script context="module">import { generateId } from "../../internal/helpers";
import { getDataState } from "./internal/helpers";
import { getDialogRootContext } from "./root.svelte";
</script>

<script>"use strict";
const rootCtx = getDialogRootContext();
const id = generateId();
</script>

<!-- TODO: include aria-controls -->
<button
	aria-haspopup="dialog"
	aria-expanded={$rootCtx.open}
	data-state={getDataState($rootCtx.open)}
	{id}
	on:click={() => {
		$rootCtx.open = true;
		$rootCtx.triggeredId = $rootCtx.open ? id : null;
	}}
	{...$$restProps}
>
	<slot />
</button>
