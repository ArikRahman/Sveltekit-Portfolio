<script context="module">import { useActions } from "../../internal/helpers/useActions";
import { getRootContext, getState } from "./root.svelte";
</script>

<script>"use strict";
const ctx = getRootContext();
</script>

<div
	{...$$restProps}
	use:useActions={$$restProps.use}
	data-value={$ctx.value}
	data-max={$ctx.max}
	data-state={getState($ctx.value, $ctx.max)}
>
	<slot />
</div>
