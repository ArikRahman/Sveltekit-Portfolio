<script context="module">import { Toggle } from "../Toggle";
</script>

<script>import { useCollection } from "../../internal/helpers";
import { getToggleGroupItemCollection, getToggleGroupRootContext } from "./root.svelte";
export let use = [];
export let value;
export let disabled = false;
const rootCtx = getToggleGroupRootContext();
const itemCollection = getToggleGroupItemCollection();
function handleChange(e) {
    const pressed = e.detail;
    if ($rootCtx.type === "single") {
        $rootCtx.value = pressed ? value : null;
    }
    else {
        const values = Array.isArray($rootCtx.value) ? $rootCtx.value : [];
        $rootCtx.value = pressed ? [...values, value] : values.filter((v) => v !== value);
    }
}
</script>

<Toggle.Root
	{...$$restProps}
	use={[
		...(use ?? []),
		[
			useCollection,
			{
				collection: itemCollection,
			},
		],
	]}
	disabled={$rootCtx.disabled || disabled}
	pressed={Array.isArray($rootCtx.value)
		? $rootCtx.value.includes(value)
		: $rootCtx.value === value}
	on:change={(e) => handleChange(e)}
	{...{ ['data-orientation']: $rootCtx.orientation }}
>
	<slot />
</Toggle.Root>
