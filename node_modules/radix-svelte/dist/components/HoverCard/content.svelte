<script context="module">"use strict";
</script>

<script>import { Popper } from "../../internal/components";
import { getRootContext } from "./root.svelte";
const ctx = getRootContext();
export let side = "bottom";
export let sideOffset = 0;
export let align = "center";
export let alignOffset = 0;
export let arrowPadding = 0;
export let collisionBoundary = [];
export let collisionPadding = 0;
export let sticky = "partial";
export let hideWhenDetached = false;
export let avoidCollisions = true;
function active() {
    clearTimeout($ctx.closeTimer);
    $ctx.closeTimer = void 0;
}
function inactive() {
    $ctx.closeTimer = setTimeout(() => $ctx.open = false, $ctx.closeDelay);
}
</script>

<Popper.Content
	on:pointerenter={active}
	on:pointerleave={inactive}
	on:focus={active}
	on:blur={inactive}
	{side}
	{sideOffset}
	{align}
	{alignOffset}
	{arrowPadding}
	{collisionBoundary}
	{collisionPadding}
	{sticky}
	{hideWhenDetached}
	{avoidCollisions}
	data-state={$ctx.open ? 'open' : 'closed'}
	{...$$restProps}
>
	<slot />
</Popper.Content>
