/**
 * Returns next item in array given an index. If index is last item, returns the first item.
 * If the index is not found, returns undefined.
 *
 * @category Array
 */
export function next(array, index, loop = true) {
    if (index === array.length - 1) {
        return loop ? array[0] : array[index];
    }
    return array[index + 1];
}
/**
 * Returns previous item in array given an index. If index is first item, returns the last item.
 * If the index is not found, returns undefined.
 * @category Array
 */
export function prev(array, index, loop = true) {
    if (index === 0) {
        return loop ? array[array.length - 1] : array[index];
    }
    return array[index - 1];
}
