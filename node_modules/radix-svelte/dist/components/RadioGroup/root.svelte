<script context="module">import { collectionContext, next, prev, useActions } from "../../internal/helpers";
import { reactiveContext } from "../../internal/helpers";
const defaults = {
    value: void 0,
    disabled: false,
    required: false,
    name: void 0
};
const { getContext, setContext } = reactiveContext(defaults);
export const getRadioGroupRootContext = getContext;
const itemCollection = collectionContext();
export const getRadioGroupItemCollection = itemCollection.getContext;
</script>

<script>export let use = [];
export let value = defaults.value;
export let dir = "ltr";
export let disabled = defaults.disabled;
export let required = defaults.required;
export let orientation = void 0;
export let name = defaults.name;
export let loop = true;
const ctx = setContext({ value: (v) => value = v });
$: ctx.set({ value, disabled, required, name });
const itemStore = itemCollection.setContext();
$: nextKeys = {
    horizontal: [dir === "rtl" ? "ArrowLeft" : "ArrowRight"],
    vertical: ["ArrowDown"],
    both: ["ArrowDown", dir === "rtl" ? "ArrowLeft" : "ArrowRight"]
}[orientation || "both"];
$: prevKeys = {
    horizontal: [dir === "rtl" ? "ArrowRight" : "ArrowLeft"],
    vertical: ["ArrowUp"],
    both: ["ArrowUp", dir === "rtl" ? "ArrowRight" : "ArrowLeft"]
}[orientation || "both"];
const listeners = /* @__PURE__ */ new Map();
itemStore.subscribe((items) => {
    items.forEach((item, index) => {
        const prevCallback = listeners.get(index);
        if (prevCallback) {
            item.removeEventListener("keydown", prevCallback);
        }
        const listener = (e) => {
            const enabledItems = items.filter((i) => i.dataset.disabled === void 0);
            const enabledIdx = enabledItems.indexOf(item);
            if (nextKeys.includes(e.key)) {
                e.preventDefault();
                const el = next(enabledItems, enabledIdx, loop);
                el?.focus();
                el?.click();
            }
            else if (prevKeys.includes(e.key)) {
                e.preventDefault();
                const el = prev(enabledItems, enabledIdx, loop);
                el?.focus();
                el?.click();
            }
        };
        listeners.set(index, listener);
        item.addEventListener("keydown", listener);
    });
});
</script>

<div
	{dir}
	role="radiogroup"
	tabindex="0"
	data-disabled={disabled ? '' : undefined}
	data-orientation={orientation}
	aria-orientation={orientation}
	aria-required={required}
	{...$$restProps}
	use:useActions={use ?? []}
>
	<slot />
</div>
