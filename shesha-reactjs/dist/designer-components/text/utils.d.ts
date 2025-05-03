import { ContentDisplay, ITextTypographyProps, TypographyFontSize, TypographyPaddingSize } from './models';
export declare const getFontSizeStyle: (key: TypographyFontSize) => {
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string;
    lineHeight: number;
} | {
    fontSize: string;
    lineHeight: number;
} | {
    fontSize: string;
    lineHeight: number;
} | {
    fontSize: string;
    lineHeight: number;
} | {
    fontSize: string;
    lineHeight: number;
};
export declare const getPaddingSizeStyle: (key: TypographyPaddingSize) => {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
} | {
    padding: string;
};
export declare const DEFAULT_CONTENT_TYPE = "";
export declare const DEFAULT_CONTENT_DISPLAY: ContentDisplay;
export declare const DEFAULT_PADDING_SIZE: TypographyPaddingSize;
export interface IContent {
    dataType?: ITextTypographyProps['dataType'];
    dateFormat?: ITextTypographyProps['dateFormat'];
    numberFormat?: ITextTypographyProps['numberFormat'];
    dataFormat?: string;
}
export declare const formatDateStringAndPrefix: (content: string, dateFormat?: string) => string;
export declare const getContent: (content: string, { dataType, dateFormat, numberFormat }?: IContent) => any;
