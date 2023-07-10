<script context="module">import { dismissable } from "../../../internal/actions";
import { Popper } from "../../../internal/components/Popper";
import { createEventDispatcher, onMount } from "svelte";
import { TOOLTIP_OPEN } from "../constants";
import { getTooltipRootContext } from "../root.svelte";
</script>

<script>const dispatch = createEventDispatcher();
export let use = [];
export let ref = void 0;
const rootCtx = getTooltipRootContext();
onMount(() => {
    document.addEventListener(TOOLTIP_OPEN, $rootCtx.onClose);
    return () => {
        document.removeEventListener(TOOLTIP_OPEN, $rootCtx.onClose);
    };
});
const handleScroll = (event) => {
    const target = event.target;
    if (target?.contains($rootCtx.trigger)) {
        $rootCtx.onClose();
    }
};
$: {
    window.removeEventListener("scroll", handleScroll, { capture: true });
    if ($rootCtx.trigger) {
        window.addEventListener("scroll", handleScroll, { capture: true });
    }
}
const onPointerDownOutside = (event) => {
    dispatch("pointerDownOutside", event.detail);
};
const onEscapeKeyDown = (event) => {
    dispatch("escapeKeyDown", event.detail);
};
</script>

<Popper.Content
	{...$$restProps}
	use={[
		...(use ?? []),
		[
			dismissable,
			{
				onPointerDownOutside,
				onEscapeKeyDown,
				onDismiss: () => {
					$rootCtx.onClose();
				},
			},
		],
	]}
	data-state={$rootCtx.stateAttribute}
	bind:ref
>
	<!-- TODO: Implement visually hidden -->
	<slot />
</Popper.Content>
