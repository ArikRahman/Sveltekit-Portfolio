<script context="module">"use strict";
</script>

<script>import { Popper } from "../../internal/components";
import { getRootContext } from "./root.svelte";
import { createEventDispatcher } from "svelte";
export let use = [];
const ctx = getRootContext();
const dispatch = createEventDispatcher();
const open = () => {
    clearTimeout($ctx.closeTimer);
    const timer = setTimeout(() => $ctx.open = true, $ctx.openDelay);
    $ctx.openTimer = timer;
};
const close = () => {
    clearTimeout($ctx.openTimer);
    $ctx.closeTimer = setTimeout(() => $ctx.open = false, $ctx.closeDelay);
};
$: dispatch("change", $ctx.open);
</script>

<Popper.Anchor
	as="a"
	on:pointerenter={open}
	on:pointerleave={close}
	on:focus={open}
	on:blur={close}
	on:touchstart={(e) => e.preventDefault()}
	use={[...(use ?? [])]}
	data-state={$ctx.open ? 'open' : 'closed'}
	{...$$restProps}
>
	<slot />
</Popper.Anchor>
