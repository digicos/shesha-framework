import { HttpClientApi, HttpResponse } from "./api";
import { AxiosRequestConfig } from "axios";
export declare class AxiosHttpClient implements HttpClientApi {
    #private;
    get<T = any, R = HttpResponse<T>>(url: string): Promise<R>;
    delete<T = any, R = HttpResponse<T>>(url: string): Promise<R>;
    head<T = any, R = HttpResponse<T>>(url: string): Promise<R>;
    options<T = any, R = HttpResponse<T>>(url: string): Promise<R>;
    post<T = any, R = HttpResponse<T>>(url: string, data?: any): Promise<R>;
    put<T = any, R = HttpResponse<T>>(url: string, data?: any): Promise<R>;
    patch<T = any, R = HttpResponse<T>>(url: string, data?: any): Promise<R>;
    setConfig(axiosConfig: AxiosRequestConfig): void;
    constructor(axiosConfig: AxiosRequestConfig);
}
/**
 * Returns an instance of HttpClientApi that allows making HTTP requests using Axios.
 *
 * @return {HttpClientApi} An instance of HttpClientApi for making HTTP requests.
 */
export declare const useHttpClient: () => HttpClientApi;
