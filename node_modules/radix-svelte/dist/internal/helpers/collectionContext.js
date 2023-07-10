/**
 * Context for registering child components in a parent component.
 * Makes it possible for components to access their child index,
 * and for other components to access the components in the collection.
 */
import { writable } from 'svelte/store';
import { uniqueContext } from './uniqueContext';
export function collectionContext() {
    const initialContext = uniqueContext();
    const setContext = () => {
        const store = writable([]);
        initialContext.setContext(store);
        return store;
    };
    return { setContext, getContext: initialContext.getContext };
}
/**
 * Register a HTMLElement in a collection.
 * Will automatically remove the element from the collection when the node is destroyed.
 */
export const useCollection = (node, args) => {
    if (!args)
        throw new Error('No args provided');
    const { collection: store } = args;
    store.update((nodes) => [...nodes, node]);
    const unsubscribe = store.subscribe((nodes) => {
        args?.onIndexChange?.(nodes.indexOf(node));
    });
    return {
        destroy: () => {
            unsubscribe();
            store.update((nodes) => nodes.filter((n) => n !== node));
        },
    };
};
