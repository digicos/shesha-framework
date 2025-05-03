import { UploadFile } from 'antd/lib/upload/interface';
import { IFlagsSetters, IFlagsState } from '../../interfaces';
import { StoredFileGetQueryParams } from '../../apis/storedFile';
export type IFlagProgressFlags = 'downloadFile' | 'uploadFile' | 'deleteFile' | 'dowloadZip' | 'fetchFileInfo' | 'getStoredFile';
export type IFlagSucceededFlags = 'downloadFile' | 'uploadFile' | 'deleteFile' | 'dowloadZip' | 'fetchFileInfo' | 'getStoredFile';
export type IFlagErrorFlags = 'downloadFile' | 'uploadFile' | 'deleteFile' | 'dowloadZip' | 'fetchFileInfo' | 'getStoredFile';
export type IFlagActionedFlags = '__DEFAULT__';
export interface IStoredFile extends UploadFile {
    error?: string | null;
    id?: string | null;
    url?: string | null;
    temporary?: boolean | null;
}
interface IRequestFilePayload {
    file: File;
}
export interface IUploadFilePayload extends IRequestFilePayload {
}
export interface IDownloadFilePayload {
    fileId: string;
    versionNo?: number;
    fileName: string;
}
export interface IStoredFileStateContext extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    fileInfo?: IStoredFile;
}
export interface IStoredFileActionsContext extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    downloadFile: (payload: IDownloadFilePayload) => void;
    downloadFileSuccess: () => void;
    downloadFileError: () => void;
    uploadFile: (payload: IUploadFilePayload, callback?: (...args: any) => any) => void;
    deleteFile: () => void;
    fetchFileInfo: () => void;
    fetchFileInfoError: () => void;
    getStoredFile: (payload: StoredFileGetQueryParams) => Promise<string | unknown>;
}
export declare const STORED_FILE_CONTEXT_INITIAL_STATE: IStoredFileStateContext;
export declare const StoredFileStateContext: import("react").Context<IStoredFileStateContext>;
export declare const StoredFileActionsContext: import("react").Context<IStoredFileActionsContext>;
export {};
