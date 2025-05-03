import { IStoredFile, IStoredFileStateContext } from './contexts';
export declare enum StoredFileActionEnums {
    DownloadFileRequest = "DOWNLOAD_FILE_REQUEST",
    DownloadFileSuccess = "DOWNLOAD_FILE_SUCCESS",
    DownloadFileError = "DOWNLOAD_FILE_ERROR",
    UploadFileRequest = "UPLOAD_FILE_REQUEST",
    UploadFileSuccess = "UPLOAD_FILE_SUCCESS",
    UploadFileError = "UPLOAD_FILE_ERROR",
    DeleteFileRequest = "DELETE_FILE_REQUEST",
    DeleteFileSuccess = "DELETE_FILE_SUCCESS",
    DeleteFileError = "DELETE_FILE_ERROR",
    FetchFileInfoRequest = "FETCH_FILE_INFO_REQUEST",
    FetchFileInfoSuccess = "FETCH_FILE_INFO_SUCCESS",
    FetchFileInfoError = "FETCH_FILE_INFO_ERROR",
    FileViewRequest = "FILE_VIEW_REQUEST",
    FileViewSuccess = "FILE_VIEW_SUCCESS",
    FileViewError = "FILE_VIEW_ERROR"
}
export declare const downloadFileRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const downloadFileSuccessAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const downloadFileErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const uploadFileRequestAction: import("redux-actions").ActionFunction1<IStoredFile, import("redux-actions").Action<IStoredFileStateContext>>;
export declare const uploadFileSuccessAction: import("redux-actions").ActionFunction1<IStoredFile, import("redux-actions").Action<IStoredFileStateContext>>;
export declare const uploadFileErrorAction: import("redux-actions").ActionFunction1<IStoredFile, import("redux-actions").Action<IStoredFileStateContext>>;
export declare const deleteFileRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const deleteFileSuccessAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const deleteFileErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const fetchFileInfoRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const fetchFileInfoSuccessAction: import("redux-actions").ActionFunction1<IStoredFile, import("redux-actions").Action<IStoredFileStateContext>>;
export declare const fetchFileInfoErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const fileViewRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const fileViewSuccessAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
export declare const fileViewErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IStoredFileStateContext>>;
