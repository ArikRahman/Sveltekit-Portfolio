<script context="module">import { useActions } from "../../internal/helpers/useActions";
import { convertValueToPercentage } from "./internal/utils";
import { getOrientationContext, getRootContext } from "./root.svelte";
</script>

<script>"use strict";
const rootCtx = getRootContext();
const orientation = getOrientationContext();
$: valuesCount = $rootCtx.values.length;
$: percentages = $rootCtx.values.map((value) => {
    return convertValueToPercentage(value, $rootCtx.min, $rootCtx.max);
});
$: offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
$: offsetEnd = 100 - Math.max(...percentages);
</script>

<span
	{...$$restProps}
	use:useActions={$$restProps.use}
	data-orientation={$rootCtx.orientation}
	data-disabled={$rootCtx.disabled ? '' : undefined}
	style="{$$restProps.style}; 
        {$orientation.startEdge}: {offsetStart}%; 
        {$orientation.endEdge}: {offsetEnd}%;"
>
	<slot />
</span>
