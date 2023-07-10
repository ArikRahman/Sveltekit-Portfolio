<script context="module">import { useActions } from "../../internal/helpers/useActions";
import { createEventDispatcher } from "svelte";
</script>

<script>export let pressed = false;
export let disabled = false;
const dispatch = createEventDispatcher();
export let use = [];
</script>

<button
	type="button"
	{disabled}
	on:click={() => {
		pressed = !pressed;
		dispatch('change', pressed);
	}}
	aria-pressed={pressed}
	data-state={pressed ? 'on' : 'off'}
	data-disabled={disabled ? '' : undefined}
	use:useActions={use ?? []}
	{...$$restProps}
>
	<slot />
</button>
