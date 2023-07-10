<script context="module">import { useCollection } from "../../internal/helpers/collectionContext";
import { styleToString } from "../../internal/helpers/style";
import { useActions } from "../../internal/helpers/useActions";
import { convertValueToPercentage, linearScale } from "./internal/utils";
import { getOrientationContext, getRootContext, getThumbCollectionContext } from "./root.svelte";
</script>

<script>"use strict";
const rootCtx = getRootContext();
const orientation = getOrientationContext();
let size = { width: 0, height: 0 };
let index = 0;
const thumbComponentsContext = getThumbCollectionContext();
$: value = $rootCtx.values[index];
$: percentage = convertValueToPercentage(value, $rootCtx.min, $rootCtx.max);
$: label = getLabel(index, $rootCtx.values.length);
$: orientationSize = size[$orientation.size];
$: thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percentage, $orientation.direction) : 0;
function getLabel(index2, totalValues) {
    if (totalValues > 2) {
        return `Value ${index2 + 1} of ${totalValues}`;
    }
    else if (totalValues === 2) {
        return ["Minimum", "Maximum"][index2];
    }
    else {
        return void 0;
    }
}
function getThumbInBoundsOffset(width, left, direction) {
    const halfWidth = width / 2;
    const halfPercent = 50;
    const offset = linearScale([0, halfPercent], [0, halfWidth]);
    return (halfWidth - offset(left) * direction) * direction;
}
function onIndexChange(newIndex) {
    index = newIndex;
}
$: style = styleToString({
    transform: `var(--radix-slider-thumb-transform)`,
    position: "absolute",
    [$orientation.startEdge]: `calc(${percentage}% + ${thumbInBoundsOffset}px)`
});
</script>

<span {style}>
	<span
		use:useCollection={{ collection: thumbComponentsContext, onIndexChange }}
		{...$$restProps}
		use:useActions={$$restProps.use}
		bind:clientHeight={size.height}
		bind:clientWidth={size.width}
		role="slider"
		aria-label={$$props['aria-label'] || label}
		aria-valuemin={$rootCtx.min}
		aria-valuenow={value}
		aria-valuemax={$rootCtx.max}
		aria-orientation={$rootCtx.orientation}
		data-orientation={$rootCtx.orientation}
		data-disabled={$rootCtx.disabled ? '' : undefined}
		tabindex={$rootCtx.disabled ? undefined : 0}
		style:display={value === undefined ? 'none' : 'inherit'}
		on:focus={() => {
			$rootCtx.valueIndexToChange = index;
		}}><slot /></span
	></span
>
