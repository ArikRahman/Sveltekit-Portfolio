<script>import { createEventDispatcher } from "svelte";
import { getOrientationContext } from "../root.svelte";
import SliderImpl from "./SliderImpl.svelte";
import { BACK_KEYS, linearScale } from "./utils";
const dispatch = createEventDispatcher();
let slider;
export let min;
export let max;
export let inverted;
const orientation = getOrientationContext();
$: isSlidingFromBottom = !inverted;
let rect;
function getValueFromPointer(pointerPosition) {
    if (!rect)
        rect = slider.getBoundingClientRect();
    if (!rect)
        return 0;
    const input = [0, rect.height];
    const output = isSlidingFromBottom ? [max, min] : [min, max];
    const value = linearScale(input, output);
    return value(pointerPosition - rect.top);
}
$: $orientation = {
    startEdge: isSlidingFromBottom ? "bottom" : "top",
    endEdge: isSlidingFromBottom ? "top" : "bottom",
    size: "height",
    direction: isSlidingFromBottom ? -1 : 1
};
</script>

<SliderImpl
	bind:element={slider}
	style="{$$restProps.style}; --radix-slider-thumb-transform: translateY(-50%)"
	on:slideStart={(event) => {
		const value = getValueFromPointer(event.detail.clientY);
		dispatch('slideStart', { value });
	}}
	on:slideMove={(event) => {
		const value = getValueFromPointer(event.detail.clientY);
		dispatch('slideMove', { value });
	}}
	on:slideEnd={() => {
		rect = undefined;
		dispatch('slideEnd');
	}}
	on:stepKeyDown={(event) => {
		const slideDirection = isSlidingFromBottom ? 'from-bottom' : 'from-top';
		const isBackKey = BACK_KEYS[slideDirection].includes(event.detail.key);
		dispatch('stepKeyDown', { event: event.detail, direction: isBackKey ? -1 : 1 });
	}}
	on:homeKeyDown
	on:endKeyDown
	{...$$restProps}
>
	<slot />
</SliderImpl>
