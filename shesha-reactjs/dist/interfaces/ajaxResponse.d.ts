import { AxiosResponse } from 'axios';
import { IErrorInfo } from './errorInfo';
export interface IAjaxResponseBase {
    targetUrl?: string | null;
    success?: boolean;
    error?: IErrorInfo;
    unAuthorizedRequest?: boolean;
    __abp?: boolean;
}
export interface IAjaxResponse<T> extends IAjaxResponseBase {
    result?: T;
}
export declare const isAjaxResponseBase: (value: any) => value is IAjaxResponseBase;
export declare const isAxiosResponse: (value: any) => value is AxiosResponse;
