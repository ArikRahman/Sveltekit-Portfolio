type Params = {
    disable?: boolean;
    autofocus?: boolean | HTMLElement;
};
export declare const focusTrap: <Node_1 extends HTMLElement>(container: Node_1, params?: Params) => {
    update: (newParams?: Params) => void;
    destroy(): void;
};
export {};
