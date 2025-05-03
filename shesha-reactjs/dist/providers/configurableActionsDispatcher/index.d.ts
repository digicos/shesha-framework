import React, { FC, PropsWithChildren } from 'react';
import { IConfigurableActionDispatcherActionsContext, IGetConfigurableActionPayload, IPrepareActionArgumentsPayload, IRegisterActionPayload } from './contexts';
import { IConfigurableActionGroupDictionary } from './models';
import { IConfigurableActionArguments, IConfigurableActionConfiguration, IConfigurableActionDescriptor, IConfigurableActionIdentifier } from '../../interfaces/configurableAction';
export interface IConfigurableActionDispatcherProviderProps {
}
declare const getActualActionArguments: (action: IConfigurableActionDescriptor, actionArguments: any) => any;
declare function useConfigurableActionDispatcher(require?: boolean): {
    getConfigurableAction: (payload: IGetConfigurableActionPayload) => IConfigurableActionDescriptor;
    getConfigurableActionOrNull: (payload: IGetConfigurableActionPayload) => IConfigurableActionDescriptor | null;
    getActions: () => IConfigurableActionGroupDictionary;
    registerAction: import("./contexts").RegisterActionType;
    unregisterAction: (actionIdentifier: IConfigurableActionIdentifier) => void;
    prepareArguments: <TArguments = any>(payload: IPrepareActionArgumentsPayload<TArguments>) => Promise<TArguments>;
    executeAction: import("./contexts").ConfigurableActionExecuter;
    useActionDynamicContext: import("./contexts").ActionDynamicContextEvaluationHook;
};
declare const useConfigurableActionDispatcherProxy: (require?: boolean) => FC<PropsWithChildren>;
declare const ConfigurableActionDispatcherProvider: FC<PropsWithChildren<IConfigurableActionDispatcherProviderProps>>;
declare const ConfigurableActionDispatcherConsumer: React.Consumer<IConfigurableActionDispatcherActionsContext>;
/**
 * Register configurable action
 */
declare function useConfigurableAction<TArguments = IConfigurableActionArguments, TResponse = any>(payload: IRegisterActionPayload<TArguments, TResponse>, deps?: ReadonlyArray<any>): void;
export { ConfigurableActionDispatcherConsumer, ConfigurableActionDispatcherProvider, useConfigurableAction, useConfigurableActionDispatcher, useConfigurableActionDispatcherProxy, getActualActionArguments, type IConfigurableActionConfiguration, };
