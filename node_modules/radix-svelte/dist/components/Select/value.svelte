<script context="module">import { useActions } from "../../internal/helpers";
import { getSelectRootContext } from "./root.svelte";
</script>

<script>export let use = [];
export let placeholder = "";
const rootCtx = getSelectRootContext();
</script>

<span {...$$restProps} use:useActions={use ?? []}>
	{$rootCtx.value ?? placeholder}
</span>
