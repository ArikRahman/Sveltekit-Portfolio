<script context="module">"use strict";
</script>

<script>import { Portal } from "../../internal/components";
import { getRootContext } from "./root.svelte";
export let container = "body";
const ctx = getRootContext();
</script>

{#if $ctx.open}
	<Portal target={container} {...$$restProps}>
		<slot />
	</Portal>
{/if}
