<script context="module">import { collectionContext } from "../../internal/helpers/collectionContext";
import { reactiveContext } from "../../internal/helpers";
import { useActions } from "../../internal/helpers/useActions";
const { getContext, setContext, defaults } = reactiveContext({
    type: "single",
    value: null,
    disabled: false
});
export const getRootCtx = getContext;
const triggerCollectionContext = collectionContext();
export const getTriggerCollection = triggerCollectionContext.getContext;
</script>

<script>export let type = defaults?.type;
export let value = defaults?.value;
export let disabled = defaults?.disabled;
const ctx = setContext({ value: (v) => value = v });
$: ctx.set({ type, value, disabled });
triggerCollectionContext.setContext();
</script>

<div {...$$restProps} use:useActions={$$restProps.use} data-radix-accordion-root>
	<slot />
</div>
