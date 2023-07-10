export type Direction = 'ltr' | 'rtl';
export type Side = 'top' | 'right' | 'bottom' | 'left';
export declare const PAGE_KEYS: string[];
export declare const ARROW_KEYS: string[];
export type SlideDirection = 'from-left' | 'from-right' | 'from-bottom' | 'from-top';
export declare const BACK_KEYS: Record<SlideDirection, string[]>;
export declare function linearScale(input: readonly [number, number], output: readonly [number, number]): (value: number) => number;
export declare function getDecimalCount(value: number): number;
export declare function roundValue(value: number, decimalCount: number): number;
export declare function convertValueToPercentage(value: number, min: number, max: number): number;
export declare function getNextSortedValues(prevValues: number[] | undefined, nextValue: number, atIndex: number): number[];
/**
 * Given a `values` array and a `nextValue`, determine which value in
 * the array is closest to `nextValue` and return its index.
 *
 * @example
 * // returns 1
 * getClosestValueIndex([10, 30], 25);
 */
export declare function getClosestValueIndex(values: number[], nextValue: number): number;
/**
 * Verifies the minimum steps between all values is greater than or equal
 * to the expected minimum steps.
 *
 * @example
 * // returns false
 * hasMinStepsBetweenValues([1,2,3], 2);
 *
 * @example
 * // returns true
 * hasMinStepsBetweenValues([1,2,3], 1);
 */
export declare function hasMinStepsBetweenValues(values: number[], minStepsBetweenValues: number): boolean;
