/** https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/src/internal/useActions.ts */
export type SvelteActionReturnType<P> = {
    update?: (newParams?: P) => void;
    destroy?: () => void;
} | void;
export type SvelteHTMLActionType<P> = (node: HTMLElement, params?: P) => SvelteActionReturnType<P>;
export type HTMLActionEntry<P = any> = SvelteHTMLActionType<P> | [SvelteHTMLActionType<P>, P];
export type HTMLActionArray = HTMLActionEntry[];
export type ActionArray = HTMLActionArray;
export declare function useActions(node: HTMLElement | SVGElement, actions: ActionArray): {
    update(actions: HTMLActionArray): void;
    destroy(): void;
};
