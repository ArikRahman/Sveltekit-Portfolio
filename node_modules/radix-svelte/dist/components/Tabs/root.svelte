<script context="module">import { reactiveContext } from "../../internal/helpers";
import { useActions } from "../../internal/helpers/useActions";
const defaults = {
    value: void 0,
    activateOn: "focus",
    orientation: "horizontal",
    dir: "ltr"
};
const { getContext, setContext } = reactiveContext(defaults);
export const getTabsRootContext = getContext;
</script>

<script>export let value = defaults.value;
export let dir = defaults.dir;
export let orientation = defaults.orientation;
export let activateOn = defaults.activateOn;
const ctx = setContext({ value: (v) => value = v });
$: ctx.update((old) => ({ ...old, value, activateOn, orientation, dir }));
</script>

<div {dir} data-orientation={orientation} {...$$restProps} use:useActions={$$restProps.use}>
	<slot />
</div>
