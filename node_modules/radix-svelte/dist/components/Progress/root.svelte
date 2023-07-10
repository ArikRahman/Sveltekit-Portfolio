<script context="module">import { reactiveContext } from "../../internal/helpers";
import { useActions } from "../../internal/helpers/useActions";
const defaults = {
    max: 1,
    value: null
};
const { getContext, setContext } = reactiveContext(defaults);
export const getRootContext = getContext;
export function getState(value, max) {
    return value == null ? "indeterminate" : value >= (max ?? 1) ? "complete" : "loading";
}
</script>

<script>export let max = defaults.max;
export let value = defaults.value;
const ctxStore = setContext({ value: (v) => value = v, max: (m) => max = m });
$: ctxStore.set({ value, max });
</script>

<div
	role="progressbar"
	data-value={value}
	data-max={max}
	data-state={getState(value, max)}
	aria-valuemin={0}
	aria-valuemax={max}
	aria-valuenow={value}
	aria-valuetext={`${(100 * (value ?? 0)) / (max ?? 1)}%`}
	{...$$restProps}
	use:useActions={$$restProps.use}
>
	<slot />
</div>
