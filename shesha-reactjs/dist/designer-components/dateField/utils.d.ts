import moment, { Moment } from 'moment';
import { IPropertyMetadata } from '../../interfaces/metadata';
import { IDateFieldProps } from './interfaces';
export declare const DATE_TIME_FORMATS: {
    time: string;
    week: string;
    date: string;
    quarter: string;
    month: string;
    year: string;
};
export declare const getDatePickerValue: (props: IDateFieldProps, pickerFormat: string) => {
    defaultValue: moment.Moment;
    value?: undefined;
} | {
    value: moment.Moment;
    defaultValue?: undefined;
};
export declare function disabledDate(props: IDateFieldProps, current: Moment, data: object, globalState: object): any;
export declare const getDefaultFormat: ({ showTime, resolveToUTC }: IDateFieldProps) => "YYYY-MM-DD" | "YYYY-MM-DDTHH:mm:ss";
export declare const getFormat: (props: IDateFieldProps, properties: IPropertyMetadata[]) => any;
