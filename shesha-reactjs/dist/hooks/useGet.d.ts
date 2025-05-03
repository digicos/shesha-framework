import { IHttpHeadersDictionary } from '../providers/sheshaApplication/contexts';
export interface GetDataError<TError> {
    message: string;
    data: TError | string;
    status?: number;
}
export interface GetState<TData, TError> {
    data: TData | null;
    response: Response | null;
    error: GetDataError<TError> | null;
    loading: boolean;
}
interface IQueryParams {
    [key: string]: any;
}
export interface UseGetProps<TData, /*TError,*/ TQueryParams, TPathParams> {
    /**
     * The path at which to request data,
     * typically composed by parent Gets or the RestfulProvider.
     */
    path: string | ((pathParams: TPathParams) => string);
    /**
     * Path Parameters
     */
    pathParams?: TPathParams;
    /**
     * Query parameters
     */
    queryParams?: TQueryParams;
    /**
     * A function to resolve data return from the backend, most typically
     * used when the backend response needs to be adapted in some way.
     */
    resolve?: (data: any) => TData;
    /**
     * Should we fetch data at a later stage?
     */
    lazy?: boolean;
    /**
     * An escape hatch and an alternative to `path` when you'd like
     * to fetch from an entirely different URL.
     *
     */
    base?: string;
    headers?: IHttpHeadersDictionary;
}
type RefetchOptions<TData, /*TError,*/ TQueryParams, TPathParams> = Partial<Omit<UseGetProps<TData, /*TError,*/ TQueryParams, TPathParams>, 'lazy'>>;
export interface UseGetReturn<TData, TError, TQueryParams = {}, TPathParams = unknown> extends GetState<TData, TError> {
    /**
     * Refetch
     */
    refetch: (options?: RefetchOptions<TData, /*TError,*/ TQueryParams, TPathParams>) => Promise<TData | null>;
}
export declare const useGetInternal: <TData = any, TError = any, TQueryParams = IQueryParams, TPathParams = unknown>(props: UseGetProps<TData, /*TError,*/ TQueryParams, TPathParams>) => UseGetReturn<TData, TError, TQueryParams, TPathParams>;
export declare function useGet<TData = any, TError = any, TQueryParams = IQueryParams, TPathParams = unknown>(path: UseGetProps<TData, /*TError,*/ TQueryParams, TPathParams>['path'], props: Omit<UseGetProps<TData, /*TError,*/ TQueryParams, TPathParams>, 'path'>): UseGetReturn<TData, TError, TQueryParams, TPathParams>;
export declare function useGet<TData = any, TError = any, TQueryParams = IQueryParams, TPathParams = unknown>(props: UseGetProps<TData, /*TError,*/ TQueryParams, TPathParams>): UseGetReturn<TData, TError, TQueryParams, TPathParams>;
export {};
