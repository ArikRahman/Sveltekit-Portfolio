<script context="module">import { collectionContext, next, prev, useActions } from "../../internal/helpers";
import { reactiveContext } from "../../internal/helpers";
const defaults = {
    type: "single",
    orientation: "horizontal",
    dir: "ltr",
    loop: true,
    rovingFocus: true,
    disabled: false,
    value: null
};
const { getContext, setContext } = reactiveContext(defaults);
export const getToggleGroupRootContext = getContext;
const itemCollection = collectionContext();
export const getToggleGroupItemCollection = itemCollection.getContext;
</script>

<script>export let type = defaults.type;
export let value = null;
export let rovingFocus = defaults.rovingFocus;
export let orientation = defaults.orientation;
export let dir = defaults.dir;
export let loop = defaults.loop;
export let disabled = defaults.disabled;
export let role = "group";
const ctx = setContext({ value: (v) => value = v });
$: ctx.set({ type, orientation, dir, loop, rovingFocus, disabled, value });
const itemStore = itemCollection.setContext();
$: nextKey = {
    horizontal: dir === "rtl" ? "ArrowLeft" : "ArrowRight",
    vertical: "ArrowDown"
}[orientation ?? "horizontal"];
$: prevKey = {
    horizontal: dir === "rtl" ? "ArrowRight" : "ArrowLeft",
    vertical: "ArrowUp"
}[orientation ?? "horizontal"];
const listeners = /* @__PURE__ */ new Map();
itemStore.subscribe((items) => {
    items.forEach((item, index) => {
        const prevCallback = listeners.get(index);
        if (prevCallback) {
            item.removeEventListener("keydown", prevCallback);
        }
        const enabledItems = items.filter((i) => i.dataset.disabled === void 0);
        const enabledIdx = enabledItems.indexOf(item);
        const listener = (e) => {
            if (!rovingFocus)
                return;
            if (e.key === nextKey) {
                e.preventDefault();
                next(enabledItems, enabledIdx, loop)?.focus();
            }
            else if (e.key === prevKey) {
                e.preventDefault();
                prev(enabledItems, enabledIdx, loop)?.focus();
            }
        };
        listeners.set(index, listener);
        item.addEventListener("keydown", listener);
    });
});
</script>

<div {role} {dir} {...$$restProps} use:useActions={$$restProps.use} data-orientation={orientation}>
	<slot />
</div>
