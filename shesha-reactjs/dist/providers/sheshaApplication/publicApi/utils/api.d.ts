import { HttpClientApi } from "../http/api";
export interface IUtilsApi {
    evaluateString: (template: string, data: any) => string;
}
/**
 * Utils API.
 */
export declare class UtilsApi implements IUtilsApi {
    readonly _httpClient: HttpClientApi;
    constructor(httpClient: HttpClientApi);
    evaluateString: (template: string, data: any) => string;
}
