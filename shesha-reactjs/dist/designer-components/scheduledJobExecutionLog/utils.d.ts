import { IExecutionLogEvent } from '../../providers/scheduledJobExecution/contexts';
export interface IScheduledJobExecutionLog {
    id: string;
}
export interface IJobExecutionContext {
    hubEvents: string[];
}
export interface IHubEvent {
    formattedEvent: string;
    message: string;
    level: string;
    timeStamp: string;
}
export interface IScheduledJobExecutionLogDisplay {
    hubEvents: IExecutionLogEvent[];
}
export declare const getLogText: (hubEvents: IExecutionLogEvent[]) => string;
