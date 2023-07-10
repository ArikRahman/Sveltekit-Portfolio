/**
 * Returns next item in array given an index. If index is last item, returns the first item.
 * If the index is not found, returns undefined.
 *
 * @category Array
 */
export declare function next<T>(array: T[], index: number, loop?: boolean): T | undefined;
/**
 * Returns previous item in array given an index. If index is first item, returns the last item.
 * If the index is not found, returns undefined.
 * @category Array
 */
export declare function prev<T>(array: T[], index: number, loop?: boolean): T | undefined;
