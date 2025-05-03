import { FormIdentifier } from "../../../../interfaces";
import { ShaRouting } from "../../../../providers/shaRouting/contexts";
export interface INavigatorApi {
    /**
     * Navigate to the given url
     */
    navigateToUrl: (url: string, queryParameters?: Record<string, string>) => void;
    /**
     * Navigate to the given form
     */
    navigateToForm: (formId: FormIdentifier, args?: Record<string, string>) => void;
    /**
     * Get form url
     */
    getFormUrl: (formId: FormIdentifier) => string;
}
export declare class NavigatorApi implements INavigatorApi {
    #private;
    constructor(shaRouter: ShaRouting);
    navigateToUrl: (url: string, queryParameters?: Record<string, string>) => void;
    navigateToForm: (formId: FormIdentifier, args?: Record<string, string>) => void;
    getFormUrl: (formId: FormIdentifier) => string;
}
