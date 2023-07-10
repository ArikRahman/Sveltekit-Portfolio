<script context="module">const defaults = {
    checked: false,
    disabled: false
};
const { getContext, setContext } = reactiveContext(defaults);
export const getRootContext = getContext;
export function getState(checked) {
    return checked ? "checked" : "unchecked";
}
</script>

<script>import { useActions } from "../../internal/helpers/useActions";
import { reactiveContext } from "../../internal/helpers";
export let required = false;
export let value = "on";
export let checked = defaults.checked;
export let disabled = defaults.disabled;
let button;
$: isFormControl = button ? button.closest("form") : true;
const ctxStore = setContext({ checked: (v) => checked = v });
$: ctxStore.set({ checked, disabled });
</script>

<button
	bind:this={button}
	type="button"
	role="switch"
	aria-checked={checked}
	data-state={getState(checked)}
	data-disabled={disabled ? '' : undefined}
	{value}
	{disabled}
	{...$$restProps}
	use:useActions={$$restProps.use}
	on:click={() => {
		checked = !checked;
	}}
>
	<slot />
</button>

{#if isFormControl}
	<input
		type="checkbox"
		aria-hidden="true"
		hidden
		tabIndex={-1}
		name={$$props.name}
		{value}
		{checked}
		{required}
		{disabled}
		style="
        position: absolute;
        pointer-events: none;
        opacity: 0;
        margin: 0;
        transform: translateX(-100%);
    "
	/>
{/if}
