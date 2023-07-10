<script context="module">import { useActions } from "../../internal/helpers/useActions";
import { getRootContext, getState } from "./root.svelte";
</script>

<script>import { isIndeterminate } from "./root.svelte";
const ctx = getRootContext();
</script>

{#if isIndeterminate($ctx.checked) || !!$ctx.checked}
	<span
		{...$$restProps}
		use:useActions={$$restProps.use}
		data-state={getState($ctx.checked)}
		data-disabled={$ctx.disabled ? '' : undefined}
		style:pointer-events="none"
	>
		<slot />
	</span>
{/if}
