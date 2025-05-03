import { BaseType, EllipsisConfig } from 'antd/lib/typography/Base';
import { CSSProperties } from 'react';
import { IConfigurableFormComponent } from '../../providers';
declare const TITLE_ELE_LIST: [1, 2, 3, 4, 5];
type LevelType = typeof TITLE_ELE_LIST[number];
export type ContentType = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger' | 'custom';
export type ContentDisplay = 'content' | 'name';
export declare const FONT_SIZES: {
    'text-xxs': {
        fontSize: string;
        lineHeight: string;
    };
    'text-xs': {
        fontSize: string;
        lineHeight: string;
    };
    'text-sm': {
        fontSize: string;
        lineHeight: string;
    };
    'text-base': {
        fontSize: string;
        lineHeight: string;
    };
    'text-lg': {
        fontSize: string;
        lineHeight: string;
    };
    'text-xl': {
        fontSize: string;
        lineHeight: string;
    };
    'text-2xl': {
        fontSize: string;
        lineHeight: string;
    };
    'text-3xl': {
        fontSize: string;
        lineHeight: string;
    };
    'text-4xl': {
        fontSize: string;
        lineHeight: string;
    };
    'text-5xl': {
        fontSize: string;
        lineHeight: number;
    };
    'text-6xl': {
        fontSize: string;
        lineHeight: number;
    };
    'text-7xl': {
        fontSize: string;
        lineHeight: number;
    };
    'text-8xl': {
        fontSize: string;
        lineHeight: number;
    };
    'text-9xl': {
        fontSize: string;
        lineHeight: number;
    };
};
export declare const PADDING_SIZES: {
    none: {
        padding: string;
    };
    'padding-xxs': {
        padding: string;
    };
    'padding-xs': {
        padding: string;
    };
    'padding-sm': {
        padding: string;
    };
    'padding-base': {
        padding: string;
    };
    'padding-lg': {
        padding: string;
    };
    'padding-xl': {
        padding: string;
    };
    'padding-2xl': {
        padding: string;
    };
    'padding-3xl': {
        padding: string;
    };
    'padding-4xl': {
        padding: string;
    };
    'padding-5xl': {
        padding: string;
    };
    'padding-6xl': {
        padding: string;
    };
    'padding-7xl': {
        padding: string;
    };
    'padding-8xl': {
        padding: string;
    };
    'padding-9xl': {
        padding: string;
    };
};
export type TypographyFontSize = keyof typeof FONT_SIZES;
export type TypographyPaddingSize = keyof typeof PADDING_SIZES;
export interface ITypographyProps {
    code?: boolean;
    copyable?: boolean;
    delete?: boolean;
    ellipsis?: boolean | Omit<EllipsisConfig, 'rows' | 'expandable' | 'onExpand'>;
    mark?: boolean;
    underline?: boolean;
    keyboard?: boolean;
    italic?: boolean;
    type?: BaseType;
    style?: CSSProperties;
}
export interface ITextTypographyProps extends IConfigurableFormComponent {
    textType: 'span' | 'paragraph' | 'title';
    content: string;
    contentType?: ContentType;
    contentDisplay: ContentDisplay;
    color?: string;
    backgroundColor?: string;
    level?: LevelType | TypographyFontSize;
    fontSize?: TypographyFontSize;
    padding?: TypographyPaddingSize;
    dataType?: 'string' | 'date-time' | 'number' | 'boolean';
    dateFormat?: string;
    numberFormat?: string;
    code?: boolean;
    italic?: boolean;
    copyable?: boolean;
    delete?: boolean;
    ellipsis?: boolean;
    mark?: boolean;
    underline?: boolean;
    keyboard?: boolean;
    strong?: boolean;
    value?: any;
    textAlign?: string;
}
export {};
