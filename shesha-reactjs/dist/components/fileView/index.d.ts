import React, { FC } from 'react';
export type FileDataSourceType = 'url' | 'storedFileId' | 'base64';
export interface IImageProps {
    height?: number | string;
    width?: number | string;
    url?: string;
    storedFileId?: string;
    base64?: string;
    dataSource: FileDataSourceType;
    styles: React.CSSProperties;
}
declare const FileView: FC<IImageProps>;
export default FileView;
