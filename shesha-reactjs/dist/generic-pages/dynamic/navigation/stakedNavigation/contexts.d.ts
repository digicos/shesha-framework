export declare const ROOT_NAVIGATOR_ID = "a66c4992-543c-11ed-bdc3-0242ac120002";
export interface IStackedNavigationStateContext {
    navigator?: string;
}
export interface IStackedNavigationActionsContext {
    setCurrentNavigator: (navigator: string) => void;
}
export declare const STACKED_NAVIGATION_CONTEXT_INITIAL_STATE: IStackedNavigationStateContext;
export declare const StackedNavigationStateContext: import("react").Context<IStackedNavigationStateContext>;
export declare const StackedNavigationActionsContext: import("react").Context<IStackedNavigationActionsContext>;
