import type { Middleware, Placement } from '@floating-ui/core';
export declare function isDefined<T>(value: T | undefined): value is T;
export declare function isNotNull<T>(value: T | null): value is T;
export declare const transformOrigin: (options: {
    arrowWidth: number;
    arrowHeight: number;
}) => Middleware;
export declare function getSideAndAlignFromPlacement(placement: Placement): readonly ["top" | "right" | "bottom" | "left", "center" | "start" | "end"];
