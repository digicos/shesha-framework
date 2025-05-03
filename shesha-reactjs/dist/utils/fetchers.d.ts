import { AxiosResponse } from 'axios';
export declare function constructUrl<TQueryParams>(base: string, path: string, queryParams?: TQueryParams): string;
export interface BaseRequestOptions {
    /**
     * An escape hatch and an alternative to `path` when you'd like
     * to fetch from an entirely different URL.
     *
     */
    base?: string;
    /** Options passed into the fetch call. */
    headers?: HeadersInit;
}
export interface GetProps<_TData = any, _TError = any, TQueryParams = {
    [key: string]: any;
}, _TPathParams = any> extends BaseRequestOptions {
    queryParams?: TQueryParams;
}
export declare const get: <TData = any, TError = any, TQueryParams = {
    [key: string]: any;
}, _TPathParams = any>(path: string, queryParams: TQueryParams, props: Omit<GetProps<TData, TError, TQueryParams, _TPathParams>, "queryParams">, signal?: RequestInit["signal"]) => Promise<TData | null>;
export interface MutateProps<_TData = any, _TError = any, TQueryParams = {
    [key: string]: any;
}, TRequestBody = any, 
/** is used by the react hooks only */
_TPathParams = any> extends BaseRequestOptions {
    data: TRequestBody | null;
    queryParams?: TQueryParams;
    signal?: RequestInit['signal'];
}
export declare const mutate: <TData = any, TError = any, TQueryParams = {
    [key: string]: any;
}, TRequestBody = any, 
/** is used by the react hooks only */
_TPathParams = any>(method: string, path: string, data: TRequestBody, props: Omit<MutateProps<TData, TError, TQueryParams, TRequestBody, _TPathParams>, "data">) => Promise<TData | null>;
export declare const getFileNameFromContentDisposition: (disposition: string) => string;
export declare const getFileNameFromResponse: (fileResponse: AxiosResponse<any>) => string;
export declare const unwrapAbpResponse: <TResponse extends unknown, TData extends unknown>(response: TResponse) => TData | TResponse;
export declare const axiosHttp: (baseURL: string, tokenName?: string) => import("axios").AxiosInstance;
