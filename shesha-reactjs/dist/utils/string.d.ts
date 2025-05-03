export declare function decamelize(text: any, { separator, preserveConsecutiveUppercase }?: {
    separator?: string;
    preserveConsecutiveUppercase?: boolean;
}): string;
export declare function humanizeString(value: string): string;
export declare function isNumeric(value: string): boolean;
export declare function getLastSection(separator: string, value: string): string;
export declare const getNumericValue: (localValue: any) => number;
export declare function updateQueryStringParameter(uri: any, key: any, value: any): any;
export declare function toCamelCase(str: string): string;
export declare function getNumberFormat(str: any, format: string): any;
export declare const camelcaseDotNotation: (str: any) => any;
export declare const capitalizeFirstLetter: (str: string) => string;
export declare const verifiedCamelCase: (value: string) => string;
/**
 * Trims the specified suffix from the given string.
 *
 * @param {string} s - the input string
 * @param {string} w - the suffix to be trimmed
 * @return {string} the modified string with the suffix trimmed
 */
export declare const trimSuffix: (s: string, w: string) => string;
/**
 * Removes the specified prefix from the given string if it exists.
 *
 * @param {string} s - The string to remove the prefix from.
 * @param {string} w - The prefix to remove.
 * @return {string} The modified string after removing the prefix.
 */
export declare const trimPrefix: (s: string, w: string) => string;
