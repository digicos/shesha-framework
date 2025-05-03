import { FormIdentifier, INavigateActoinArguments, IRouter } from '../../providers';
export interface IShaRoutingStateContext {
    router?: IRouter;
    nextRoute?: string;
}
export interface IShaRoutingActionsContext {
    goingToRoute: (route: string) => void;
    getFormUrl: (formId: FormIdentifier) => string;
    getUrlFromNavigationRequest: (request: INavigateActoinArguments) => string;
}
export type ShaRouting = IShaRoutingStateContext & IShaRoutingActionsContext;
export declare const SHA_ROUTING_CONTEXT_INITIAL_STATE: IShaRoutingStateContext;
export declare const ShaRoutingStateContext: import("react").Context<IShaRoutingStateContext>;
export declare const ShaRoutingActionsContext: import("react").Context<IShaRoutingActionsContext>;
