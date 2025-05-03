import { FC, PropsWithChildren } from 'react';
import { IDownloadFilePayload, IDownloadZipPayload, IStoredFile, IUploadFilePayload } from './contexts';
export interface IStoredFilesProviderProps {
    ownerId: string;
    ownerType: string;
    ownerName?: string;
    filesCategory?: string;
    propertyName?: string;
    baseUrl?: string;
    value?: string;
    onChange?: (value: string) => void;
}
declare const StoredFilesProvider: FC<PropsWithChildren<IStoredFilesProviderProps>>;
declare function useStoredFilesState(): import("./contexts").IStoredFilesStateContext;
declare function useStoredFilesActions(): import("./contexts").IStoredFilesActionsContext;
declare function useStoredFilesStore(): {
    uploadFile: (payload: IUploadFilePayload) => void;
    deleteFile: (fileIdToDelete: string) => void;
    downloadZipFile: (payload?: IDownloadZipPayload) => void;
    downloadFile: (payload: IDownloadFilePayload) => void;
    setIsInProgressFlag: (key: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileList?: boolean;
        downloadZip?: boolean;
    }) => void;
    setSucceededFlag: (key: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileList?: boolean;
        downloadZip?: boolean;
    }) => void;
    setFailedFlag: (key: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileList?: boolean;
        downloadZip?: boolean;
    }) => void;
    setActionedFlag: (key: {
        __DEFAULT__?: boolean;
    }) => void;
    resetIsInProgressFlag: () => void;
    resetSucceededFlag: () => void;
    resetFailedFlag: () => void;
    resetActionedFlag: () => void;
    resetAllFlag: () => void;
    fileList?: IStoredFile[];
    newFile?: IStoredFile;
    fileIdToDelete?: string;
    url?: string;
    isInProgress?: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileList?: boolean;
        downloadZip?: boolean;
    };
    succeeded?: {
        downloadFile?: boolean;
        uploadFile?: boolean;
        deleteFile?: boolean;
        dowloadZip?: boolean;
        fetchFileList?: boolean;
        downloadZip?: boolean;
    };
    error?: {
        downloadFile?: string | boolean | import("../../interfaces").IErrorInfo;
        uploadFile?: string | boolean | import("../../interfaces").IErrorInfo;
        deleteFile?: string | boolean | import("../../interfaces").IErrorInfo;
        dowloadZip?: string | boolean | import("../../interfaces").IErrorInfo;
        fetchFileList?: string | boolean | import("../../interfaces").IErrorInfo;
        downloadZip?: string | boolean | import("../../interfaces").IErrorInfo;
    };
    actioned?: {
        __DEFAULT__?: boolean;
    };
};
export default StoredFilesProvider;
/**
 * @deprecated - use useStoredFilesStore
 */
declare const useStoredFiles: typeof useStoredFilesStore;
export { StoredFilesProvider, useStoredFiles, useStoredFilesActions, useStoredFilesState, useStoredFilesStore };
