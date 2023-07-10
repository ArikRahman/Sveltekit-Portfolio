<script context="module">import { focusTrap } from "../../internal/actions";
import { dismissable } from "../../internal/actions/dismissable";
import { removeScroll } from "../../internal/actions/removeScroll";
import { focus, useActions } from "../../internal/helpers";
import { createEventDispatcher, tick } from "svelte";
import { getDataState } from "./internal/helpers";
import { getDialogRootContext } from "./root.svelte";
</script>

<script>const dispatch = createEventDispatcher();
export let openAutoFocus = true;
export let closeAutoFocus = true;
export let use = [];
const rootCtx = getDialogRootContext();
$: if (!$rootCtx.open && $rootCtx.triggeredId && closeAutoFocus) {
    tick().then(() => {
        focus(`#${$rootCtx.triggeredId}`);
        $rootCtx.triggeredId = null;
    });
}
</script>

<div
	role="dialog"
	{...$$restProps}
	use:focusTrap={{ disable: !$rootCtx.modal, autofocus: openAutoFocus }}
	use:dismissable={{
		onPointerDownOutside: (event) => {
			dispatch('pointerDownOutside', event.detail);
		},
		onEscapeKeyDown: (event) => {
			dispatch('escapeKeyDown', event.detail);
		},
		onDismiss: () => {
			$rootCtx.open = false;
		},
	}}
	use:removeScroll={{ disable: !$rootCtx.modal }}
	id={$rootCtx.contentId}
	aria-labelledby={$rootCtx.titleId}
	aria-describedby={$rootCtx.descriptionId}
	data-state={getDataState($rootCtx.open)}
	use:useActions={use ?? []}
>
	<slot />
</div>
