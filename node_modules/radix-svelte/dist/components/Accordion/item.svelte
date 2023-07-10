<script context="module">import { reactiveContext } from "../../internal/helpers";
const { getContext, setContext } = reactiveContext();
export const getItemContext = getContext;
</script>

<script>import { Collapsible } from "../index";
import { getRootCtx } from "./root.svelte";
export let value;
const rootCtx = getRootCtx();
$: isOpen = Array.isArray($rootCtx.value) ? $rootCtx.value.includes(value) : $rootCtx.value === value;
const itemCtx = setContext();
$: itemCtx.set({ value });
</script>

<Collapsible.Root open={isOpen} disabled={$rootCtx.disabled} {...$$restProps}>
	<slot />
</Collapsible.Root>
