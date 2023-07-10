type Args = {
    disable?: boolean;
};
export declare function removeScroll(_node: HTMLElement, { disable }?: Args): {
    update({ disable }?: Args): void;
    destroy(): void;
};
export {};
