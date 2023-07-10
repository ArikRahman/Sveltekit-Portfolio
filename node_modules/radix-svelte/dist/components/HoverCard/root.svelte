<script context="module">const defaults = {
    open: false,
    openDelay: 750,
    closeDelay: 300
};
const { getContext, setContext } = reactiveContext(defaults);
export const getRootContext = getContext;
</script>

<script>import { Popper } from "../../internal/components";
import { reactiveContext } from "../../internal/helpers";
export let open = defaults.open;
export let openDelay = defaults.openDelay;
export let closeDelay = defaults.closeDelay;
export let use = [];
const ctx = setContext({
    open: (v) => open = v
});
$: ctx.update((prev) => ({
    ...prev,
    open,
    openDelay,
    closeDelay
}));
</script>

<Popper.Root {use} {...$$restProps}>
	<slot />
</Popper.Root>
