<script context="module">"use strict";
</script>

<script>import { Popper } from "../../internal/components";
import { getSelectRootContext } from "./root.svelte";
import { dismissable } from "../../internal/actions";
export let use = [];
const rootCtx = getSelectRootContext();
</script>

{#if $rootCtx.open}
	<Popper.Content
		{...$$restProps}
		use={[
			...(use ?? []),
			[
				dismissable,
				{
					onPointerDownDismiss: () => {
						$rootCtx.open = false;
					},
				},
			],
		]}
	>
		<slot />
	</Popper.Content>
{/if}
