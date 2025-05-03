import { IAnchoredDirection, IStoredFilter } from '../providers/dataTable/interfaces';
import { NestedPropertyMetadatAccessor } from '../providers/metadataDispatcher/contexts';
import { IMatchData } from '../providers/form/utils';
import { Cell } from 'react-table';
import { IPersistedFormProps } from '../providers';
import { CSSProperties } from 'react';
export type NumberOrString = number | string;
/**
 * Returns the parameter value, from the url, by name
 *
 * @param {string} name Parameter name
 * @param {string} url The url
 * @returns {string} The value of this parameter
 */
declare const _default: (name: string, url?: string) => string;
export default _default;
export declare const horizontalMouseScroll: (scrollableId: string) => void;
/**
 * Compares two values and returns true if they have changed, else false
 *
 * @param firstVal - the first value
 * @param secondVal - the second value
 */
export declare const compareValues: (firstVal: NumberOrString, secondVal: NumberOrString) => boolean;
/**
 * Returns only digits from a given string
 *
 * @param value - a string to extract digits from
 */
export declare const extractDigitsFromString: (value: string) => string;
/**
 * The method returns a safely trimmed string
 *
 * @param value - the string value to trim
 */
export declare const getSafelyTrimmedString: (value?: string) => string;
/**
 * Joins string values, filtering out falsy values
 *
 * @param values values to join
 * @param delimiter delimiter to use to join the values
 * @returns joined string value
 */
export declare const joinStringValues: (values: string[], delimiter?: string) => string;
export declare const getCircularReplacer: () => (_key: any, value: any) => any;
export declare const getValidDefaultBool: (value: any, defalutValue?: boolean) => boolean;
export declare const getPlainValue: <T = object | any[]>(value: T) => T;
export declare const getColumnAnchored: (anchored: string) => {
    isFixed: boolean;
    direction: string;
} | {
    isFixed: boolean;
    direction?: undefined;
};
export declare const calculateTotalColumnsOnFixed: (row: Cell<any, any, any>[], direction: IAnchoredDirection) => number;
export declare const calculatePositionShift: (row: Cell<any, any, any>[], start: number, end: number) => Array<number>;
export declare const getStaticExecuteExpressionParams: (params: string, dynamicParam?: {
    [key: string]: any;
}) => string;
export declare const executeExpressionPayload: (fn: Function, dynamicParam: {
    [key: string]: any;
}, ...args: any[]) => any;
export declare const evaluateDynamicFilters: (filters: IStoredFilter[], mappings: IMatchData[], propertyMetadataAccessor: NestedPropertyMetadatAccessor) => Promise<IStoredFilter[]>;
export declare const getUrlKeyParam: (url?: string) => "?" | "&";
export declare const removeEmptyArrayValues: (list: any[]) => any[];
export declare const executeFunction: (expression: string, args: {
    [key: string]: any;
}) => any;
export declare const getToolboxComponentsVisibility: (props: IPersistedFormProps, configs: IPersistedFormProps[]) => boolean;
export declare const convertJsonToCss: (style: CSSProperties) => string;
export { unwrapAbpResponse } from './fetchers';
export * from './metadata/index';
