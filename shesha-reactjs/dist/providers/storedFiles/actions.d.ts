import { IStoredFile, IStoredFilesStateContext } from './contexts';
export declare enum StoredFilesActionEnums {
    DownloadFileRequest = "DOWNLOAD_FILE_REQUEST",
    DownloadFileSuccess = "DOWNLOAD_FILE_SUCCESS",
    DownloadFileError = "DOWNLOAD_FILE_ERROR",
    UploadFileRequest = "UPLOAD_FILE_REQUEST",
    UploadFileSuccess = "UPLOAD_FILE_SUCCESS",
    UploadFileError = "UPLOAD_FILE_ERROR",
    DeleteFileRequest = "DELETE_FILE_REQUEST",
    DeleteFileSuccess = "DELETE_FILE_SUCCESS",
    DeleteFileError = "DELETE_FILE_ERROR",
    DowloadZipRequest = "DOWLOAD_ZIP_REQUEST",
    DowloadZipSuccess = "DOWLOAD_ZIP_SUCCESS",
    DowloadZipError = "DOWLOAD_ZIP_ERROR",
    FetchFileListRequest = "FETCH_FILE_LIST_REQUEST",
    FetchFileListSuccess = "FETCH_FILE_LIST_SUCCESS",
    FetchFileListError = "FETCH_FILE_LIST_ERROR",
    DownloadZipRequest = "DOWNLOAD_ZIP_REQUEST",
    DownloadZipSuccess = "DOWNLOAD_ZIP_SUCCESS",
    DownloadZipError = "DOWNLOAD_ZIP_ERROR",
    OnFileAdded = "ON_FILE_ADDED",
    OnFileDeleted = "ON_FILE_REMOVED"
}
export declare const downloadFileRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const downloadFileSuccessAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const downloadFileErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const uploadFileRequestAction: import("redux-actions").ActionFunction1<IStoredFile, import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const uploadFileSuccessAction: import("redux-actions").ActionFunction1<IStoredFile, import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const uploadFileErrorAction: import("redux-actions").ActionFunction1<IStoredFile, import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const deleteFileRequestAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const deleteFileSuccessAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const deleteFileErrorAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const dowloadZipRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const dowloadZipSuccessAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const dowloadZipErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const fetchFileListRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const fetchFileListSuccessAction: import("redux-actions").ActionFunction1<IStoredFile[], import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const fetchFileListErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const downloadZipRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const downloadZipSuccessAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const downloadZipErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const onFileAddedAction: import("redux-actions").ActionFunction1<IStoredFile, import("redux-actions").Action<IStoredFilesStateContext>>;
export declare const onFileDeletedAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<IStoredFilesStateContext>>;
