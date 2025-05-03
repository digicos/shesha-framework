import { FC, PropsWithChildren } from 'react';
import { StoredFileGetQueryParams } from '../../apis/storedFile';
import { IDownloadFilePayload, IStoredFile, IUploadFilePayload } from './contexts';
export interface IStoredFileProviderPropsBase {
    baseUrl?: string;
}
export interface IEntityProperty extends IStoredFileProviderPropsBase {
    ownerId: string;
    ownerType: string;
    propertyName: string;
}
export interface ISingleFile extends IStoredFileProviderPropsBase {
    fileId: string;
}
export type FileUploadMode = 'async' | 'sync';
export interface IStoredFileProviderProps {
    ownerId?: string;
    ownerType?: string;
    fileCategory?: string;
    propertyName?: string;
    fileId?: string;
    baseUrl?: string;
    uploadMode?: FileUploadMode;
    value?: any;
    onChange?: (value: any) => void;
}
declare const StoredFileProvider: FC<PropsWithChildren<IStoredFileProviderProps>>;
declare function useStoredFileState(required?: boolean): import("./contexts").IStoredFileStateContext;
declare function useStoredFileActions(required?: boolean): import("./contexts").IStoredFileActionsContext;
declare function useStoredFile(required?: boolean): {
    downloadFile: (payload: IDownloadFilePayload) => void;
    downloadFileSuccess: () => void;
    downloadFileError: () => void;
    uploadFile: (payload: IUploadFilePayload, callback?: (...args: any) => any) => void;
    deleteFile: () => void;
    fetchFileInfo: () => void;
    fetchFileInfoError: () => void;
    getStoredFile: (payload: StoredFileGetQueryParams) => Promise<string | unknown>;
    setIsInProgressFlag: (key: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileInfo?: boolean;
        getStoredFile?: boolean;
    }) => void;
    setSucceededFlag: (key: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileInfo?: boolean;
        getStoredFile?: boolean;
    }) => void;
    setFailedFlag: (key: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileInfo?: boolean;
        getStoredFile?: boolean;
    }) => void;
    setActionedFlag: (key: {
        __DEFAULT__?: boolean;
    }) => void;
    resetIsInProgressFlag: () => void;
    resetSucceededFlag: () => void;
    resetFailedFlag: () => void;
    resetActionedFlag: () => void;
    resetAllFlag: () => void;
    fileInfo?: IStoredFile;
    isInProgress?: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileInfo?: boolean;
        getStoredFile?: boolean;
    };
    succeeded?: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileInfo?: boolean;
        getStoredFile?: boolean;
    };
    error?: {
        downloadFile?: string | boolean | import("../..").IErrorInfo;
        uploadFile?: string | boolean | import("../..").IErrorInfo;
        deleteFile?: string | boolean | import("../..").IErrorInfo;
        dowloadZip?: string | boolean | import("../..").IErrorInfo;
        fetchFileInfo?: string | boolean | import("../..").IErrorInfo;
        getStoredFile?: string | boolean | import("../..").IErrorInfo;
    };
    actioned?: {
        __DEFAULT__?: boolean;
    };
};
export { StoredFileProvider, useStoredFile, useStoredFileActions, useStoredFileState };
