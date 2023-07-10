<script context="module">const defaults = {
    placedSide: "bottom"
};
const { getContext, setContext } = reactiveContext(defaults);
export const getPopperContentContext = getContext;
</script>

<script>import { flip, hide, limitShift, offset, shift, size } from "@floating-ui/core";
import { autoUpdate, arrow as floatingUIarrow, platform } from "@floating-ui/dom";
import { computePosition } from "@floating-ui/core";
import { reactiveContext, useActions } from "../../helpers";
import { onDestroy } from "svelte";
import { getRootContext } from "./root.svelte";
import { getSideAndAlignFromPlacement, isDefined, isNotNull, transformOrigin } from "./utils";
export let use = [];
export let ref = null;
export let side = defaults.placedSide;
export let sideOffset = 0;
export let align = "center";
export let alignOffset = 0;
export let arrowPadding = 0;
export let collisionBoundary = [];
export let collisionPadding = 0;
export let sticky = "partial";
export let hideWhenDetached = false;
export let avoidCollisions = true;
const rootCtx = getRootContext();
const ctx = setContext();
let content;
$: if (content) {
    ref = content;
}
onDestroy(() => {
    ref = null;
});
$: desiredPlacement = side + (align !== "center" ? "-" + align : "");
$: collisionPadding = typeof collisionPadding === "number" ? collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPadding };
$: boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
$: hasExplicitBoundaries = boundary.length > 0;
$: detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter(isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
};
let strategy;
let placement;
let middlewareData;
let x = null;
let y = null;
function updatePosition(options) {
    computePosition($rootCtx.anchor, content, options).then(async (position) => {
        ({ strategy, placement, middlewareData, x, y } = position);
    });
}
let cleanup = null;
onDestroy(() => {
    cleanup?.();
});
$: if (content && $rootCtx.anchor) {
    if (cleanup)
        cleanup();
    cleanup = autoUpdate($rootCtx.anchor, content, () => {
        const arrowWidth = $ctx.arrowWidth ?? 0;
        const arrowHeight = $ctx.arrowHeight ?? 0;
        updatePosition({
            platform,
            strategy: "fixed",
            placement: desiredPlacement,
            middleware: [
                offset({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
                avoidCollisions ? shift({
                    mainAxis: true,
                    crossAxis: false,
                    limiter: sticky === "partial" ? limitShift() : void 0,
                    ...detectOverflowOptions
                }) : void 0,
                avoidCollisions ? flip({ ...detectOverflowOptions }) : void 0,
                size({
                    ...detectOverflowOptions,
                    apply: ({ elements, rects, availableWidth, availableHeight }) => {
                        const { width: anchorWidth, height: anchorHeight } = rects.reference;
                        const contentStyle = elements.floating.style;
                        contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
                        contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
                        contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
                        contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
                    }
                }),
                $rootCtx.arrow ? floatingUIarrow({ element: $rootCtx.arrow, padding: arrowPadding }) : void 0,
                transformOrigin({ arrowWidth, arrowHeight }),
                hideWhenDetached ? hide({ strategy: "referenceHidden" }) : void 0
            ].filter(isDefined)
        });
    });
}
$: isPlaced = x !== null && y !== null;
$: [placedSide, placedAlign] = placement ? getSideAndAlignFromPlacement(placement) : [side, void 0];
$: {
    const arrowX = middlewareData?.arrow?.x || 0;
    const arrowY = middlewareData?.arrow?.y || 0;
    const cannotCenterArrow = middlewareData?.arrow?.centerOffset !== 0;
    ctx.update((old) => ({
        ...old,
        placedSide,
        arrowX,
        arrowY,
        shouldHideArrow: cannotCenterArrow
    }));
}
$: contentZIndex = content && window?.getComputedStyle(content).zIndex || 0;
</script>

<div
	bind:this={content}
	on:pointerenter
	on:pointerleave
	on:blur
	on:focus
	data-radix-popper-content-wrapper=""
	style:position={strategy}
	style:left={0}
	style:top={0}
	style:transform={isPlaced
		? `translate3d(${Math.round(x ?? 0)}px, ${Math.round(y ?? 0)}px, 0)`
		: 'translate3d(0, -200%, 0)'}
	style:min-width="max-content"
	style:z-index={contentZIndex}
	style:--radix-popper-transform-origin={middlewareData?.transformOrigin?.x +
		' ' +
		middlewareData?.transformOrigin?.y}
	dir={$$restProps.dir}
	use:useActions={use ?? []}
>
	<div
		{...$$restProps}
		data-side={placedSide}
		data-align={placedAlign}
		style:animation="{isPlaced ? undefined : 'none'},"
		style:opacity={middlewareData?.hide?.referenceHidden ? 0 : undefined}
	>
		<slot />
	</div>
</div>
