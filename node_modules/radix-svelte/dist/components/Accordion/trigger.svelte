<script context="module">"use strict";
</script>

<script>import { useCollection } from "../../internal/helpers/collectionContext";
import { Collapsible } from "../Collapsible";
import { getItemContext } from "./item.svelte";
import { getRootCtx, getTriggerCollection } from "./root.svelte";
const itemCtx = getItemContext();
const rootCtx = getRootCtx();
const triggerCollection = getTriggerCollection();
let triggerIndex = 0;
const handleKeyDown = (e) => {
    switch (e.key) {
        case "ArrowDown": {
            e.preventDefault();
            e.stopPropagation();
            $triggerCollection[triggerIndex + 1]?.focus();
            break;
        }
        case "ArrowUp": {
            e.preventDefault();
            e.stopPropagation();
            $triggerCollection[triggerIndex - 1]?.focus();
            break;
        }
        case "Home": {
            e.preventDefault();
            e.stopPropagation();
            $triggerCollection[0]?.focus();
            break;
        }
        case "End": {
            e.preventDefault();
            e.stopPropagation();
            $triggerCollection.at(-1)?.focus();
            break;
        }
    }
};
function onIndexChange(index) {
    triggerIndex = index;
}
</script>

<Collapsible.Trigger
	use={[
		...($$restProps.use ?? []),
		[
			useCollection,
			{
				collection: triggerCollection,
				onIndexChange,
			},
		],
	]}
	on:change={(e) => {
		const value = e.detail;
		if ($rootCtx.type === 'single') {
			$rootCtx.value = value ? $itemCtx.value : null;
		} else {
			const prevValue = Array.isArray($rootCtx.value) ? $rootCtx.value : [];
			$rootCtx.value = value
				? [...prevValue, $itemCtx.value]
				: prevValue.filter((v) => v !== $itemCtx.value);
		}
	}}
	on:keydown={handleKeyDown}
	{...$$restProps}
>
	<slot />
</Collapsible.Trigger>
