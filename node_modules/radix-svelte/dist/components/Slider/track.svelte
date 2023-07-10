<script context="module">import { useActions } from "../../internal/helpers/useActions";
</script>

<script>import { getRootContext } from "./root.svelte";
const rootCtx = getRootContext();
</script>

<span
	{...$$restProps}
	use:useActions={$$restProps.use}
	data-disabled={$rootCtx.disabled ? '' : undefined}
	data-orientation={$rootCtx.orientation}
>
	<slot />
</span>
