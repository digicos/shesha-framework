import IRequestHeaders from '../../interfaces/requestHeaders';
import { IDictionary, IToolboxComponentGroup } from '../../interfaces';
export interface ISheshaRutes {
    formsDesigner: string;
}
export interface IHttpHeadersDictionary {
    [key: string]: string;
}
export interface ISheshaApplicationStateContext {
    applicationName?: string;
    applicationKey?: string;
    backendUrl: string;
    httpHeaders: IHttpHeadersDictionary;
    formDesignerComponentGroups?: IToolboxComponentGroup[];
    routes: ISheshaRutes;
    globalVariables?: {
        [key in string]: any;
    };
    formDesignerComponentRegistrations: IDictionary<IToolboxComponentGroup[]>;
}
export declare const DEFAULT_SHESHA_ROUTES: ISheshaRutes;
export declare const SHESHA_APPLICATION_CONTEXT_INITIAL_STATE: ISheshaApplicationStateContext;
export interface ISheshaApplicationActionsContext {
    changeBackendUrl?: (backendUrl: string) => void;
    setRequestHeaders?: (headers: IRequestHeaders) => void;
    anyOfPermissionsGranted?: (permissions: string[]) => boolean;
    setGlobalVariables?: (values: {
        [x: string]: any;
    }) => void;
    registerFormDesignerComponents: (owner: string, components: IToolboxComponentGroup[]) => void;
}
export type ISheshaApplication = ISheshaApplicationStateContext & ISheshaApplicationActionsContext;
export declare const DEFAULT_ACCESS_TOKEN_NAME = "xDFcxiooPQxazdndDsdRSerWQPlincytLDCarcxVxv";
export declare const SheshaApplicationStateContext: import("react").Context<ISheshaApplicationStateContext>;
export declare const SheshaApplicationActionsContext: import("react").Context<ISheshaApplicationActionsContext>;
