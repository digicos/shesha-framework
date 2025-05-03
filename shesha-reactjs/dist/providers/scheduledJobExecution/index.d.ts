import { FC, PropsWithChildren } from 'react';
import { IExecutionLogEvent } from './contexts';
export interface IScheduledJobExecutionProviderProps {
    id: string;
    baseUrl?: string;
}
declare const ScheduledJobExecutionProvider: FC<PropsWithChildren<IScheduledJobExecutionProviderProps>>;
declare function useScheduledJobExecutionState(): import("./contexts").IScheduledJobExecutionStateContext;
declare function useScheduledJobExecutionActions(): import("./contexts").IScheduledJobExecutionActionsContext;
declare function useScheduledJobExecution(): {
    getExecutionLogRequest: () => void;
    getExecutionLogSuccess: (events: IExecutionLogEvent[]) => void;
    getExecutionLogError: () => void;
    downloadLogFileRequest: () => void;
    downloadLogFileSuccess: () => void;
    downloadLogFileError: () => void;
    setIsInProgressFlag: (key: {
        getExecutionLog?: boolean;
    }) => void;
    setSucceededFlag: (key: {
        getExecutionLog?: boolean;
    }) => void;
    setFailedFlag: (key: {
        getExecutionLog?: boolean;
    }) => void;
    setActionedFlag: (key: {
        __DEFAULT__?: boolean;
    }) => void;
    resetIsInProgressFlag: () => void;
    resetSucceededFlag: () => void;
    resetFailedFlag: () => void;
    resetActionedFlag: () => void;
    resetAllFlag: () => void;
    id?: string;
    executionLogEvents?: IExecutionLogEvent[];
    eventToAdd?: IExecutionLogEvent;
    hubConnection?: import("@microsoft/signalr").HubConnection;
    isInProgress?: {
        getExecutionLog?: boolean;
    };
    succeeded?: {
        getExecutionLog?: boolean;
    };
    error?: {
        getExecutionLog?: string | boolean | import("../..").IErrorInfo;
    };
    actioned?: {
        __DEFAULT__?: boolean;
    };
};
export { ScheduledJobExecutionProvider, useScheduledJobExecution, useScheduledJobExecutionActions, useScheduledJobExecutionState, };
