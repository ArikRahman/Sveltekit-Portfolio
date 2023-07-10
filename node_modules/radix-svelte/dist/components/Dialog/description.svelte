<script context="module">import { getDialogRootContext } from "./root.svelte";
</script>

<script>"use strict";
const rootCtx = getDialogRootContext();
</script>

<p id={$rootCtx.descriptionId} {...$$restProps}>
	<slot />
</p>
