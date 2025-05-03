export interface PromisedValue<T> {
    isPending: boolean;
    isResolved: boolean;
    isRejected: boolean;
    value?: T;
    error: any;
    promise: Promise<T>;
}
export declare function MakePromiseWithState<T>(promise: Promise<T>): PromisedValue<T>;
