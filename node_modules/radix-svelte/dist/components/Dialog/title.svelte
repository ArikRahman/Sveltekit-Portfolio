<script context="module">import { getDialogRootContext } from "./root.svelte";
</script>

<script>"use strict";
const rootCtx = getDialogRootContext();
</script>

<h2 id={$rootCtx.titleId} {...$$restProps}>
	<slot />
</h2>
