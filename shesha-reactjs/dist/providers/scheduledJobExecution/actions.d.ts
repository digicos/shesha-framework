import { HubConnection } from '@microsoft/signalr';
import { IExecutionLogEvent, IScheduledJobExecutionStateContext } from './contexts';
export declare enum ScheduledJobExecutionActionEnums {
    GetExecutionLogRequest = "GET_EXECUTION_LOG_REQUEST",
    GetExecutionLogSuccess = "GET_EXECUTION_LOG_SUCCESS",
    GetExecutionLogError = "GET_EXECUTION_LOG_ERROR",
    AddExecutionLogEvent = "ADD_EXECUTION_LOG_EVENT",
    SetHubConnection = "SET_HUB_CONNECTION",
    DownloadLogFileRequest = "DOWNLOAD_LOG_FILE_REQUEST",
    DownloadLogFileSuccess = "DOWNLOAD_LOG_FILE_SUCCESS",
    DownloadLogFileError = "DOWNLOAD_LOG_FILE_ERROR"
}
export declare const getExecutionLogRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IScheduledJobExecutionStateContext>>;
export declare const getExecutionLogSuccessAction: import("redux-actions").ActionFunction1<IExecutionLogEvent[], import("redux-actions").Action<IScheduledJobExecutionStateContext>>;
export declare const getExecutionLogErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IScheduledJobExecutionStateContext>>;
export declare const addExecutionLogEventAction: import("redux-actions").ActionFunction1<IExecutionLogEvent, import("redux-actions").Action<IScheduledJobExecutionStateContext>>;
export declare const setHubConnectionAction: import("redux-actions").ActionFunction1<HubConnection, import("redux-actions").Action<IScheduledJobExecutionStateContext>>;
export declare const downloadLogFileRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IScheduledJobExecutionStateContext>>;
export declare const downloadLogFileSuccessAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IScheduledJobExecutionStateContext>>;
export declare const downloadLogFileErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<IScheduledJobExecutionStateContext>>;
