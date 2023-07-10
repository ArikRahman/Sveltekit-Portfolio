<script context="module">import { generateId } from "../../internal/helpers";
import { reactiveContext } from "../../internal/helpers";
const { getContext, setContext, defaults } = reactiveContext({
    open: false,
    modal: true,
    titleId: generateId(),
    descriptionId: generateId(),
    contentId: generateId(),
    triggeredId: null
});
export const getDialogRootContext = getContext;
</script>

<script>export let open = defaults?.open;
export let modal = defaults?.modal;
const rootCtx = setContext({
    open: (v) => open = v,
    modal: (v) => modal = v
});
$: rootCtx.update((v) => ({ ...v, open, modal }));
</script>

<slot />
