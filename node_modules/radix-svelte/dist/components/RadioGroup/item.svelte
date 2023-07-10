<script context="module">import { useActions, useCollection } from "../../internal/helpers";
import { reactiveContext } from "../../internal/helpers/reactiveContext";
import { getRadioGroupItemCollection, getRadioGroupRootContext } from "./root.svelte";
const defaults = {
    disabled: false
};
const { getContext, setContext } = reactiveContext(defaults);
export const getRadioGroupItemContext = getContext;
</script>

<script>export let use = [];
export let value;
export let disabled = defaults.disabled;
export let required = false;
const rootCtx = getRadioGroupRootContext();
const itemCollection = getRadioGroupItemCollection();
$: checked = $rootCtx.value === value;
$: merged = {
    disabled: disabled || $rootCtx.disabled,
    required: required || $rootCtx.required
};
const ctx = setContext();
$: ctx.set({ checked, disabled: merged.disabled });
</script>

<button
	type="button"
	role="radio"
	aria-checked={checked}
	data-state={checked ? 'checked' : 'unchecked'}
	data-disabled={merged.disabled ? '' : undefined}
	disabled={merged.disabled}
	{value}
	on:click={() => {
		if ($rootCtx.disabled) {
			return;
		}

		rootCtx.set({ value });
	}}
	{...$$restProps}
	use:useActions={[
		...(use ?? []),
		[
			useCollection,
			{
				collection: itemCollection,
			},
		],
	]}
>
	<slot />
</button>
<input
	type="hidden"
	aria-hidden
	tabIndex={-1}
	name={$rootCtx.name}
	{value}
	{checked}
	required={merged.required}
	disabled={merged.disabled}
/>
