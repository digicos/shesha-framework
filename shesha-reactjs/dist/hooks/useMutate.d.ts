import { IApiEndpoint } from '../interfaces/metadata';
interface IMutateState {
    loading: boolean;
    error: any;
}
export interface IUseMutateResponse<TData = any, TResponse = any> extends IMutateState {
    mutate: (endpoint: IApiEndpoint, data?: TData) => Promise<TResponse>;
}
export declare const useMutate: <TData = any, TResponse = any>() => IUseMutateResponse<TData, TResponse>;
export interface IUseMutateResponseFixedEndpoint<TData = any, TResponse = any> extends IMutateState {
    mutate: (data?: TData) => Promise<TResponse>;
}
export interface IApiEndpointWithPathParams<TData> {
    /**
     * Http verb (get/post/put etc)
     */
    httpVerb: string;
    /**
     * Url
     */
    url: string | ((data: TData) => string);
}
export declare const useMutateForEndpoint: <TData = any, TResponse = any>(endpoint: IApiEndpointWithPathParams<TData>) => IUseMutateResponseFixedEndpoint<TData, TResponse>;
export {};
