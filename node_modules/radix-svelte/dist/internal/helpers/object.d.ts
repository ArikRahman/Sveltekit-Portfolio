export declare function omit<T extends Record<string, PropertyKey>, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K>;
export declare function objectKeys<O extends object>(object: O): (`${keyof O & undefined}` | `${keyof O & null}` | `${keyof O & string}` | `${keyof O & number}` | `${keyof O & false}` | `${keyof O & true}`)[];
/**
 * Strict typed `Object.entries`
 * Extracted from https://github.com/antfu/utils
 *
 * @category Object
 */
export declare function objectEntries<T extends object>(obj: T): [keyof T, T[keyof T]][];
/**
 * Function that returns an array of keys given multiple objects.
 * The array of keys has no duplicates.
 *
 * @category Object
 */
export declare function joinKeys<T extends string | number | symbol>(...objects: object[]): T[];
