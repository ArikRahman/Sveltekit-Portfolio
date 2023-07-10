import Anchor from './anchor.svelte';
import Arrow from './arrow.svelte';
import Content from './content.svelte';
import Root from './root.svelte';
export const SIDE_OPTIONS = ['top', 'right', 'bottom', 'left'];
export const ALIGN_OPTIONS = ['start', 'center', 'end'];
export const Popper = {
    Root,
    Anchor,
    Arrow,
    Content,
};
