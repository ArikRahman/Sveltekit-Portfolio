import Provider from './provider.svelte';
export { type TooltipProviderProps } from './provider.svelte';
import Root from './root.svelte';
export type { TooltipRootProps } from './root.svelte';
import Trigger from './trigger.svelte';
export type { TooltipTriggerProps } from './trigger.svelte';
import Portal from './portal.svelte';
export type { TooltipPortalProps } from './portal.svelte';
import Content from './content.svelte';
export type { TooltipContentProps } from './content.svelte';
import Arrow from '../../internal/components/Popper/arrow.svelte';
export declare const Tooltip: {
    Provider: typeof Provider;
    Root: typeof Root;
    Trigger: typeof Trigger;
    Portal: typeof Portal;
    Content: typeof Content;
    Arrow: typeof Arrow;
};
