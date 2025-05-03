import { IDelayedUpdateGroup } from './models';
export interface IDelayedUpdateStateContext {
    groups: IDelayedUpdateGroup[];
}
export interface IDelayedUpdateActionContext {
    addItem: (groupName: string, id: any, data?: any) => void;
    removeItem: (groupName: string, id: any) => void;
    getPayload: () => IDelayedUpdateGroup[];
}
/** initial state */
export declare const DELAYED_UPDATE_PROVIDER_CONTEXT_INITIAL_STATE: IDelayedUpdateStateContext;
export declare const DelayedUpdateProviderStateContext: import("react").Context<IDelayedUpdateStateContext>;
export declare const DelayedUpdateProviderActionsContext: import("react").Context<IDelayedUpdateActionContext>;
