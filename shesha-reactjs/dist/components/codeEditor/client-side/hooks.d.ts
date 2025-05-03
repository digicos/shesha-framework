import { IDisposable } from "monaco-editor";
export type SubscriptionsManager = {
    add: (subscription: IDisposable) => void;
    clear: () => void;
    count: number;
};
export declare const useDisposableSubscriptions: () => SubscriptionsManager;
