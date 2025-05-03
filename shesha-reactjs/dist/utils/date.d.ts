import { Moment } from 'moment';
import { RangeValue } from '../designer-components/dateField/interfaces';
/**
 * Checks if the date provided is within the date range
 *
 * @param {string} dateFrom - the minimum date
 * @param {string} dateTo - the maximum date
 * @param {string} dateToCompare - the date to compare
 */
export declare const isDateBetween: (dateFrom: string, dateTo: string, dateToCompare: string) => boolean;
/**
 *
 * @param dateString
 */
export declare const getFormattedDate: (dateString: string) => string;
/**
 * Convert date from ISO format to `YYYY/MM/DD HH:mm:ss`
 *
 * @param date - date in `YYYY/MM/DD HH:mm:ss` format
 * @returns date in `YYYY/MM/DD HH:mm:ss` or an empty string if the date passed was in the wrong format
 */
export declare const formattedDate: (date: string) => string;
export declare const shortDob: (date: string) => string;
export declare const LongDob: (date: string) => string;
export declare const tolocalIsoDate: (dateIsoString: string) => string;
export declare const getMoment: (value: any, dateFormat: string) => Moment;
export declare const getRangeMoment: (value: any, dateFormat: string) => RangeValue;
