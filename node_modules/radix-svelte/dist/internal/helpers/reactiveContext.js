import { writable } from 'svelte/store';
import { joinKeys, objectEntries } from './object';
import { uniqueContext } from './uniqueContext';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function reactiveContext(defaults) {
    const initialContext = uniqueContext();
    const setContext = (setters) => {
        const keys = joinKeys(defaults ?? {}, setters ?? {});
        const store = writable(keys.reduce((acc, key) => {
            if (defaults?.[key] !== undefined) {
                acc[key] = defaults[key];
            }
            return acc;
        }, {}));
        const update = (updater) => {
            store.update((prev) => {
                const newState = updater(prev);
                const keys = joinKeys(defaults ?? {}, newState ?? {});
                const withDefaults = keys.reduce((acc, key) => {
                    if (newState[key] === undefined && defaults?.[key] !== undefined) {
                        acc[key] = defaults[key];
                    }
                    else {
                        acc[key] = newState[key];
                    }
                    return acc;
                }, {});
                objectEntries(withDefaults).forEach(([key, value]) => {
                    if (setters) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const setter = key in setters ? setters[key] : undefined;
                        setter?.(value);
                    }
                });
                return withDefaults;
            });
        };
        const set = (v) => {
            update(() => v);
        };
        const contextStore = {
            ...store,
            set,
            update,
        };
        initialContext.setContext(contextStore);
        return contextStore;
    };
    return { ...initialContext, setContext, defaults };
}
