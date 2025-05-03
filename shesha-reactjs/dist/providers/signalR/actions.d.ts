import { ISignalRConnection, ISignalRStateContext } from './contexts';
export declare enum SignalRActionEnums {
    SetConnection = "SET_CONNECTION"
}
export declare const setConnectionAction: import("redux-actions").ActionFunction1<ISignalRConnection, import("redux-actions").Action<ISignalRStateContext>>;
