<script context="module">"use strict";
</script>

<script>import { slide } from "svelte/transition";
import { getCollapsibleRootContext } from "./root.svelte";
import { useActions } from "../../internal/helpers/useActions";
export let transition = void 0;
$: transitionParams = function getParams() {
    if (!transition) {
        return {
            duration: 0
        };
    }
    let transitionObj = typeof transition === "object" ? transition : {};
    return {
        duration: 300,
        ...transitionObj
    };
}();
const ctx = getCollapsibleRootContext();
</script>

{#if $ctx.open}
	<div
		{...$$restProps}
		use:useActions={$$restProps.use}
		data-state={$ctx.open ? 'open' : 'closed'}
		data-disabled={$ctx.disabled ? 'true' : undefined}
		transition:slide|local={transitionParams}
	>
		<slot />
	</div>
{/if}
