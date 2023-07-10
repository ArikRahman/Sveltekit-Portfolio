import Anchor from './anchor.svelte';
import Arrow from './arrow.svelte';
import Content from './content.svelte';
import Root from './root.svelte';
export type { PopperRootProps } from './root.svelte';
export type { PopperAnchorProps } from './anchor.svelte';
export type { PopperArrowProps } from './arrow.svelte';
export type { PopperContentProps } from './content.svelte';
export declare const SIDE_OPTIONS: readonly ["top", "right", "bottom", "left"];
export declare const ALIGN_OPTIONS: readonly ["start", "center", "end"];
export type Side = (typeof SIDE_OPTIONS)[number];
export type Align = (typeof ALIGN_OPTIONS)[number];
export declare const Popper: {
    Root: typeof Root;
    Anchor: typeof Anchor;
    Arrow: typeof Arrow;
    Content: typeof Content;
};
