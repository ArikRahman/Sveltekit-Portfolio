<script context="module">"use strict";
</script>

<script>import { Portal } from "../../internal/components";
import { getTooltipRootContext } from "./root.svelte";
export let container = "body";
const ctx = getTooltipRootContext();
</script>

{#if $ctx.open}
	<Portal target={container} {...$$restProps}>
		<slot />
	</Portal>
{/if}
