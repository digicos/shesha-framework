import { FC } from 'react';
export interface IFileUploadProps {
    allowUpload?: boolean;
    allowReplace?: boolean;
    allowDelete?: boolean;
    callback?: (...args: any) => any;
    value?: any;
    onChange?: any;
    isStub?: boolean;
    allowedFileTypes?: string[];
    isDragger?: boolean;
}
export declare const FileUpload: FC<IFileUploadProps>;
export default FileUpload;
