import React, { PropsWithChildren } from 'react';
import { ISignalRConnection } from './contexts';
export interface ISignalRProvider {
    hubUrl: string;
    baseUrl?: string;
    onConnected?: (connection: ISignalRConnection) => void;
    onDisconnected?: () => void;
}
declare function SignalRProvider({ children, baseUrl, hubUrl, onConnected, onDisconnected, }: PropsWithChildren<ISignalRProvider>): React.JSX.Element;
declare function useSignalRState(require: boolean): import("./contexts").ISignalRStateContext;
declare function useSignalRActions(require: boolean): import("./contexts").ISignalRActionsContext;
declare function useSignalR(require?: boolean): {
    connection?: import("@microsoft/signalr").HubConnection;
};
export default SignalRProvider;
export { SignalRProvider, useSignalR, useSignalRActions, useSignalRState };
