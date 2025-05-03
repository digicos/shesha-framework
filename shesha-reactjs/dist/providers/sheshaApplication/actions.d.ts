import { IToolboxComponentGroup } from '../../interfaces';
import IRequestHeaders from '../../interfaces/requestHeaders';
export declare enum SheshaApplicationActionEnums {
    SetRequestHeaders = "SET_REQUEST_HEADERS",
    SetBackendUrl = "SET_BACKEND_URL",
    SetGlobalVariables = "SET_GLOBAL_VARIABLES",
    RegisterFormDesignerComponents = "REGISTER_FORM_DESIGNER_COMPONENTS"
}
export declare const setHeadersAction: import("redux-actions").ActionFunction1<IRequestHeaders, import("redux-actions").Action<IRequestHeaders>>;
export declare const setBackendUrlAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const setGlobalVariablesAction: import("redux-actions").ActionFunction1<{
    [x: string]: any;
}, import("redux-actions").Action<{
    [x: string]: any;
}>>;
export interface RegisterFormDesignerComponentsActionPayload {
    owner: string;
    components: IToolboxComponentGroup[];
}
export declare const registerFormDesignerComponentsAction: import("redux-actions").ActionFunction1<RegisterFormDesignerComponentsActionPayload, import("redux-actions").Action<RegisterFormDesignerComponentsActionPayload>>;
