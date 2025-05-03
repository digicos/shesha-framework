import { ITestActionPayload } from './contexts';
export declare enum DynamicActionsActionEnums {
    TestAction = "TEST"
}
export declare const testAction: import("redux-actions").ActionFunction1<ITestActionPayload, import("redux-actions").Action<ITestActionPayload>>;
