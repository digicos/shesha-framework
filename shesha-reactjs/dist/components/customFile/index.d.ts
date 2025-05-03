import { FC } from 'react';
import { IUploadFilePayload, IStoredFile } from '../../providers/storedFiles/contexts';
export interface ICustomFileProps {
    uploadFile?: (payload: IUploadFilePayload) => void;
    onFileListChanged?: (list: IStoredFile[]) => void;
    allowAdd?: boolean;
    allowReplace?: boolean;
    allowDelete?: boolean;
    allowRename?: boolean;
    isStub?: boolean;
    allowedFileTypes?: string[];
    maxHeight?: string;
    isDragger?: boolean;
    downloadZip?: boolean;
}
export declare const CustomFile: FC<ICustomFileProps>;
export default CustomFile;
