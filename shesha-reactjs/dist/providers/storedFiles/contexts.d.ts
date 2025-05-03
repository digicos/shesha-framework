import { IFlagsSetters, IFlagsState } from '../../interfaces';
import { UploadFile } from 'antd/lib/upload/interface';
export type IFlagProgressFlags = 'downloadFile' | 'uploadFile' | 'deleteFile' | 'dowloadZip' | 'fetchFileList' | 'downloadZip';
export type IFlagSucceededFlags = 'downloadFile' | 'uploadFile' | 'deleteFile' | 'dowloadZip' | 'fetchFileList' | 'downloadZip';
export type IFlagErrorFlags = 'downloadFile' | 'uploadFile' | 'deleteFile' | 'dowloadZip' | 'fetchFileList' | 'downloadZip';
export type IFlagActionedFlags = '__DEFAULT__';
export interface IStoredFile extends UploadFile {
    error?: string | null;
    id?: string | null;
    fileCategory?: string | null;
    url?: string | null;
    temporary?: boolean;
}
export interface IRequestFilePayload {
    file: File;
    ownerId?: string;
    ownerType?: string;
    ownerName?: string;
}
export interface IUploadFilePayload extends IRequestFilePayload {
}
export interface IDownloadZipPayload extends IRequestFilePayload {
}
export interface IDownloadFilePayload {
    fileId: string;
    versionNo?: number;
    fileName: string;
}
export interface IStoredFilesStateContext extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    fileList?: IStoredFile[];
    newFile?: IStoredFile;
    fileIdToDelete?: string;
    url?: string;
}
export interface IStoredFilesActionsContext extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    uploadFile: (payload: IUploadFilePayload) => void;
    deleteFile: (fileIdToDelete: string) => void;
    downloadZipFile: (payload?: IDownloadZipPayload) => void;
    downloadFile: (payload: IDownloadFilePayload) => void;
}
export declare const STORED_FILES_CONTEXT_INITIAL_STATE: IStoredFilesStateContext;
export declare const StoredFilesStateContext: import("react").Context<IStoredFilesStateContext>;
export declare const StoredFilesActionsContext: import("react").Context<IStoredFilesActionsContext>;
