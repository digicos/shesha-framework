import { IStackedNavigationStateContext } from './contexts';
export declare enum StackedNavigationActionEnums {
    SetCurrentNavigator = "SET_CURRENT_NAVIGATOR"
}
export interface ISetNavigatorPayload {
    navigator?: string;
}
export declare const setCurrentNavigatorAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<IStackedNavigationStateContext>>;
