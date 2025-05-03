import { HttpClientApi } from "../http/api";
import { FormsManager } from "./manager";
export interface IFormsApi {
    /**
     * Prepare form markup using form template
     */
    prepareTemplateAsync: (templateId: string, replacements: object) => Promise<string>;
}
/**
 * Forms API.
 */
export declare class FormsApi implements IFormsApi {
    readonly _formsManager: FormsManager;
    readonly _httpClient: HttpClientApi;
    constructor(httpClient: HttpClientApi);
    prepareTemplateAsync: (templateId: string, replacements: object) => Promise<string>;
}
