<script context="module">import { useActions } from "../../internal/helpers/useActions";
import { getRootContext, getState } from "./root.svelte";
</script>

<script>"use strict";
const rootCtx = getRootContext();
</script>

<span
	{...$$restProps}
	use:useActions={$$restProps.use}
	data-state={getState($rootCtx.checked)}
	data-disabled={$rootCtx.disabled ? '' : undefined}
/>
