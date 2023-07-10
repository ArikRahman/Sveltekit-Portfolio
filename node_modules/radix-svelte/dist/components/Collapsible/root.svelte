<script context="module">import { reactiveContext } from "../../internal/helpers";
const defaults = {
    open: false,
    disabled: false
};
const { getContext, setContext } = reactiveContext(defaults);
export const getCollapsibleRootContext = getContext;
</script>

<script>import { useActions } from "../../internal/helpers/useActions";
export let open = defaults.open;
export let disabled = defaults.disabled;
export let use = [];
const ctx = setContext({ open: (v) => open = v });
$: ctx.set({ open, disabled });
</script>

<div
	data-state={open ? 'open' : 'closed'}
	data-disabled={disabled ? 'true' : undefined}
	use:useActions={use ?? []}
	data-radix-collapsible-root
	{...$$restProps}
>
	<slot />
</div>
