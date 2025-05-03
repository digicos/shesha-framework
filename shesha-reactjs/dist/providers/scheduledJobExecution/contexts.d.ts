import { HubConnection } from '@microsoft/signalr';
import { Moment } from 'moment';
import { IFlagsSetters, IFlagsState } from '../../interfaces';
export type IFlagProgressFlags = 'getExecutionLog';
export type IFlagSucceededFlags = 'getExecutionLog';
export type IFlagErrorFlags = 'getExecutionLog';
export type IFlagActionedFlags = '__DEFAULT__';
export interface IExecutionLogEvent {
    message?: string | null;
    timeStamp?: Moment;
    level?: string | null;
}
export interface IScheduledJobExecutionStateContext extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    id?: string;
    executionLogEvents?: IExecutionLogEvent[];
    eventToAdd?: IExecutionLogEvent;
    hubConnection?: HubConnection;
}
export interface IScheduledJobExecutionActionsContext extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    getExecutionLogRequest: () => void;
    getExecutionLogSuccess: (events: IExecutionLogEvent[]) => void;
    getExecutionLogError: () => void;
    downloadLogFileRequest: () => void;
    downloadLogFileSuccess: () => void;
    downloadLogFileError: () => void;
}
export declare const SCHEDULED_JOB_EXECUTION_CONTEXT_INITIAL_STATE: IScheduledJobExecutionStateContext;
export declare const ScheduledJobExecutionStateContext: import("react").Context<IScheduledJobExecutionStateContext>;
export declare const ScheduledJobExecutionActionsContext: import("react").Context<IScheduledJobExecutionActionsContext>;
