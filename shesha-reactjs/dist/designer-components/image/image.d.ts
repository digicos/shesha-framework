import React, { FC } from 'react';
export type ImageSourceType = 'url' | 'storedFile' | 'base64';
export interface IImageFieldProps {
    height?: number | string;
    width?: number | string;
    value?: string;
    onChange?: (newValue: string) => void;
    readOnly: boolean;
    imageSource: ImageSourceType;
    styles: React.CSSProperties;
    allowPreview?: boolean;
    allowedFileTypes?: string[];
    alt?: string;
}
export declare const ImageField: FC<IImageFieldProps>;
