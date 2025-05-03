import { IProvidersDictionary } from './models';
import { IDynamicActionsContext } from '../dynamicActions/contexts';
export interface IDynamicActionsDispatcherStateContext {
    activeProvider?: string;
}
export interface IRegisterProviderPayload {
    id: string;
    contextValue: IDynamicActionsContext;
}
export interface IDynamicActionsDispatcherActionsContext {
    registerProvider: (payload: IRegisterProviderPayload) => void;
    getProviders: () => IProvidersDictionary;
    getProvider: (providerUid: string) => IDynamicActionsContext | undefined;
}
export interface IDynamicActionsDispatcherFullInstance extends IDynamicActionsDispatcherStateContext, IDynamicActionsDispatcherActionsContext {
}
export interface IDynamicActionsRegistration {
    id: string;
    contextValue: IDynamicActionsContext;
}
/** initial state */
export declare const DYNAMIC_ACTIONS_DISPATCHER_CONTEXT_INITIAL_STATE: IDynamicActionsDispatcherStateContext;
export declare const DynamicActionsDispatcherStateContext: import("react").Context<IDynamicActionsDispatcherStateContext>;
export declare const DynamicActionsDispatcherActionsContext: import("react").Context<IDynamicActionsDispatcherActionsContext>;
