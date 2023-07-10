<script context="module">import { reactiveContext } from "../../internal/helpers";
import { useActions } from "../../internal/helpers/useActions";
const defaults = {
    checked: false,
    disabled: false
};
const { getContext, setContext } = reactiveContext(defaults);
export const getRootContext = getContext;
export function isIndeterminate(checked) {
    return checked === "indeterminate";
}
export function getState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
</script>

<script>export let checked = defaults.checked;
export let disabled = defaults.disabled;
export let required = false;
export let name = "";
export let value = "";
const ctx = setContext();
$: ctx.set({ checked, disabled });
</script>

<button
	on:click|stopPropagation={() => {
		if (isIndeterminate(checked)) {
			checked = true;
		} else {
			checked = !checked;
		}
	}}
	on:keydown={(event) => {
		// According to WAI ARIA, Checkboxes don't activate on enter keypress
		if (event.key === 'Enter') event.preventDefault();
	}}
	type="button"
	role="checkbox"
	aria-checked={isIndeterminate(checked) ? 'mixed' : checked}
	aria-required={required}
	data-state={getState($ctx.checked)}
	data-disabled={disabled ? '' : undefined}
	{disabled}
	{value}
	{...$$restProps}
	use:useActions={$$restProps.use}
>
	<slot />

	<!-- Hidden input to bubble value up to form -->
	<input
		type="checkbox"
		aria-hidden="true"
		hidden
		tabIndex={-1}
		{name}
		{value}
		checked={isIndeterminate(checked) ? false : checked}
		{required}
		{disabled}
		style:position="absolute"
		style:pointer-events="none"
		style:opacity="0"
		style:margin="0"
		style:transform="translateX(-100%)"
	/>
</button>
