export declare function uniqueContext<T>(): {
    getContext: () => T;
    setContext: (value: T) => T;
};
