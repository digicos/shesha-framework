import { FC } from 'react';
import { ButtonProps } from 'antd';
import { IDownloadFilePayload, IStoredFile, IUploadFilePayload } from '../../providers/storedFiles/contexts';
interface IUploaderFileTypes {
    name: string;
    type: string;
}
export interface IStoredFilesRendererBaseProps {
    fileList?: IStoredFile[];
    allowUpload?: boolean;
    allowDelete?: boolean;
    showDragger?: boolean;
    ownerId?: string;
    ownerType?: string;
    multiple?: boolean;
    isDownloadingFileListZip?: boolean;
    isDownloadZipSucceeded?: boolean;
    fetchFilesError?: boolean;
    downloadZipFileError?: boolean;
    deleteFile: (fileIdToDelete: string) => void;
    uploadFile: (payload: IUploadFilePayload) => void;
    downloadZipFile?: () => void;
    downloadZip?: boolean;
    downloadFile: (payload: IDownloadFilePayload) => void;
    validFileTypes?: IUploaderFileTypes[];
    maxFileLength?: number;
    isDragger?: boolean;
    disabled?: boolean;
    uploadBtnProps?: ButtonProps;
    isStub?: boolean;
    allowedFileTypes?: string[];
    maxHeight?: string;
}
export declare const StoredFilesRendererBase: FC<IStoredFilesRendererBaseProps>;
export default StoredFilesRendererBase;
