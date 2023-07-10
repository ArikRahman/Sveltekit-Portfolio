<script>import { createEventDispatcher } from "svelte";
import { getOrientationContext } from "../root.svelte";
import SliderImpl from "./SliderImpl.svelte";
import { BACK_KEYS, linearScale } from "./utils";
const dispatch = createEventDispatcher();
let slider;
export let min;
export let max;
export let dir;
export let inverted;
const orientation = getOrientationContext();
$: isDirectionLTR = dir === "ltr";
$: isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
let rect;
function getValueFromPointer(pointerPosition) {
    if (!rect)
        rect = slider.getBoundingClientRect();
    if (!rect)
        return 0;
    const input = [0, rect.width];
    const output = isSlidingFromLeft ? [min, max] : [max, min];
    const value = linearScale(input, output);
    return value(pointerPosition - rect.left);
}
$: $orientation = {
    startEdge: isSlidingFromLeft ? "left" : "right",
    endEdge: isSlidingFromLeft ? "right" : "left",
    size: "width",
    direction: isSlidingFromLeft ? 1 : -1
};
</script>

<SliderImpl
	bind:element={slider}
	style="{$$restProps.style}; --radix-slider-thumb-transform: translateX(-50%)"
	on:slideStart={(event) => {
		const value = getValueFromPointer(event.detail.clientX);
		dispatch('slideStart', { value });
	}}
	on:slideMove={(event) => {
		const value = getValueFromPointer(event.detail.clientX);
		dispatch('slideMove', { value });
	}}
	on:slideEnd={() => {
		rect = undefined;
		dispatch('slideEnd');
	}}
	on:stepKeyDown={(event) => {
		const slideDirection = isSlidingFromLeft ? 'from-left' : 'from-right';
		const isBackKey = BACK_KEYS[slideDirection].includes(event.detail.key);
		dispatch('stepKeyDown', { event: event.detail, direction: isBackKey ? -1 : 1 });
	}}
	on:homeKeyDown
	on:endKeyDown
	{...$$restProps}
>
	<slot />
</SliderImpl>
