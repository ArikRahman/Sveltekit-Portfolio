<script context="module">import { getDataState } from "./internal/helpers";
import { getDialogRootContext } from "./root.svelte";
</script>

<script>"use strict";
const rootCtx = getDialogRootContext();
</script>

{#if $rootCtx.modal}
	<div data-state={getDataState($rootCtx.open)} {...$$restProps}>
		<slot />
	</div>
{/if}
