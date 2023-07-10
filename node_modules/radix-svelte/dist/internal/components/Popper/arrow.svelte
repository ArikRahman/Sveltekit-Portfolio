<script context="module">import { Arrow } from "../../../components/Arrow";
import { styleToString } from "../../helpers";
import { getPopperContentContext } from "./content.svelte";
import { getRootContext } from "./root.svelte";
</script>

<script>const OPPOSITE_SIDE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
};
export let width = void 0;
export let height = void 0;
const rootContext = getRootContext();
const contentContext = getPopperContentContext();
$: contentContext.update((old) => ({ ...old, arrowWidth: width, arrowHeight: height }));
$: baseSide = OPPOSITE_SIDE[$contentContext.placedSide];
$: style = styleToString({
    position: "absolute",
    left: $contentContext.arrowX ? $contentContext.arrowX + "px" : void 0,
    top: $contentContext.arrowY ? $contentContext.arrowY + "px" : void 0,
    [baseSide]: 0,
    "transform-origin": {
        top: "",
        right: "0 0",
        bottom: "center 0",
        left: "100% 0"
    }[$contentContext.placedSide],
    transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: `rotate(180deg)`,
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
    }[$contentContext.placedSide],
    visibility: $contentContext.shouldHideArrow ? "hidden" : "initial"
});
</script>

<span bind:this={$rootContext.arrow} {style}>
	<Arrow.Root {...$$restProps} style="{$$restProps.style ?? ''}; display:block" {width} {height} />
</span>
