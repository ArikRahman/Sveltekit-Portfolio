export function omit(obj, ...keys) {
    const result = {};
    for (const key of Object.keys(obj)) {
        if (!keys.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
// Provides a method with typed keys for Object.keys
export function objectKeys(object) {
    return Object.keys(object);
}
/**
 * Strict typed `Object.entries`
 * Extracted from https://github.com/antfu/utils
 *
 * @category Object
 */
export function objectEntries(obj) {
    return Object.entries(obj);
}
/**
 * Function that returns an array of keys given multiple objects.
 * The array of keys has no duplicates.
 *
 * @category Object
 */
export function joinKeys(...objects) {
    return [...new Set(objects.flatMap(Object.keys))];
}
