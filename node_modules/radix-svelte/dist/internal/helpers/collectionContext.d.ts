/**
 * Context for registering child components in a parent component.
 * Makes it possible for components to access their child index,
 * and for other components to access the components in the collection.
 */
import { type Writable } from 'svelte/store';
import type { SvelteHTMLActionType } from './useActions';
export declare function collectionContext(): {
    setContext: () => Writable<HTMLElement[]>;
    getContext: () => Writable<HTMLElement[]>;
};
/**
 * Register a HTMLElement in a collection.
 * Will automatically remove the element from the collection when the node is destroyed.
 */
export declare const useCollection: SvelteHTMLActionType<{
    /** The collection to register to */
    collection: Writable<HTMLElement[]>;
    /** Callback with the index of the child in the component, called whenever changed */
    onIndexChange?: (index: number) => void;
}>;
