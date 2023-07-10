import Root from './root.svelte';
export type { HoverCardRootProps } from './root.svelte';
import Portal from './portal.svelte';
export type { HoverCardPortalProps } from './portal.svelte';
import Trigger from './trigger.svelte';
export type { HoverCardTriggerProps } from './trigger.svelte';
import Content from './content.svelte';
export type { HoverCardContentProps } from './content.svelte';
import Arrow from '../../internal/components/Popper/arrow.svelte';
export declare const HoverCard: {
    Root: typeof Root;
    Portal: typeof Portal;
    Trigger: typeof Trigger;
    Content: typeof Content;
    Arrow: typeof Arrow;
};
