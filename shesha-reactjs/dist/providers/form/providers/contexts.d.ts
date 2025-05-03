import { IShaFormInstance } from "../store/interfaces";
export interface IShaFormStateContext {
    shaForm: IShaFormInstance;
}
export declare const ShaFormStateContext: import("react").Context<IShaFormStateContext>;
export declare const ShaFormInstanceContext: import("react").Context<IShaFormInstance<any>>;
