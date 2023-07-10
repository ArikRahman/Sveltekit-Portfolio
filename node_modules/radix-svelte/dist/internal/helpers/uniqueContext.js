import { getContext, setContext } from 'svelte';
export function uniqueContext() {
    const key = Symbol();
    return {
        getContext: () => getContext(key),
        setContext: (value) => setContext(key, value),
    };
}
