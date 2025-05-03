import { HubConnection } from '@microsoft/signalr';
export type IFlagProgressFlags = '__DEFAULT__';
export type IFlagSucceededFlags = '__DEFAULT__';
export type IFlagErrorFlags = '__DEFAULT__';
export type IFlagActionedFlags = '__DEFAULT__';
export interface ISignalRConnection extends HubConnection {
}
export interface ISignalRStateContext {
    connection?: HubConnection;
}
export interface ISignalRActionsContext {
}
export declare const SIGNAL_R_CONTEXT_INITIAL_STATE: ISignalRStateContext;
export declare const SignalRStateContext: import("react").Context<ISignalRStateContext>;
export declare const SignalRActionsContext: import("react").Context<ISignalRActionsContext>;
