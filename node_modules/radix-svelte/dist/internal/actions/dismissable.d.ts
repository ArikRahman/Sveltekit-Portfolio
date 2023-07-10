export type ForwardedEvent<T extends Event> = CustomEvent<{
    originalEvent: T;
    preventDefault: () => void;
}>;
type Params = {
    disable?: boolean;
    onPointerDownOutside?: (e: ForwardedEvent<MouseEvent>) => void;
    onEscapeKeyDown?: (e: ForwardedEvent<KeyboardEvent>) => void;
    onDismiss?: () => void;
};
export declare const dismissable: <Node_1 extends HTMLElement>(node: Node_1, params?: Params) => {
    update: (params?: Params) => void;
    destroy(): void;
};
export {};
