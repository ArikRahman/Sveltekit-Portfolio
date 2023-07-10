<script context="module">"use strict";
</script>

<script>import { Popper } from "../../internal/components";
import { getSelectRootContext } from "./root.svelte";
export let use = [];
const rootCtx = getSelectRootContext();
</script>

<Popper.Anchor
	on:click={() => {
		$rootCtx.open = !$rootCtx.open;
	}}
	{...$$restProps}
	use={[...(use ?? [])]}
>
	<slot />
</Popper.Anchor>
