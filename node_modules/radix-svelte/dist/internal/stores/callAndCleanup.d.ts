type FnThatCanReturnFn = () => (() => void) | void;
type Runner<T> = (cb: (arg: T) => void) => void;
export declare const createCallAndCleanup: () => {
    subscribe(runner: Runner<FnThatCanReturnFn>): () => void;
};
export {};
