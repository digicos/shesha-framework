import { IErrorInfo } from '../../interfaces/errorInfo';
import { FormIdentifier, FormMarkupWithSettings, IFormSettings } from '../form/models';
import { UpToDateForm } from '../formManager/interfaces';
export interface IFormPersisterStateContext {
    formId: FormIdentifier;
    skipCache: boolean;
    formProps: UpToDateForm;
    loaded: boolean;
    loading: boolean;
    loadError?: IErrorInfo;
    saving: boolean;
    saved: boolean;
    saveError?: IErrorInfo;
}
export interface ILoadRequestPayload {
    formId: FormIdentifier;
}
export interface ILoadFormPayload {
    skipCache: boolean;
}
export interface IFormPersisterActionsContext {
    loadForm: (payload: ILoadFormPayload) => void;
    saveForm: (payload: FormMarkupWithSettings) => Promise<void>;
    updateFormSettings: (settings: IFormSettings) => void;
}
/** Form initial state */
export declare const FORM_PERSISTER_CONTEXT_INITIAL_STATE: IFormPersisterStateContext;
export declare const FormPersisterStateContext: import("react").Context<IFormPersisterStateContext>;
export declare const FormPersisterActionsContext: import("react").Context<IFormPersisterActionsContext>;
export declare const FormPersisterStateConsumer: import("react").Consumer<IFormPersisterStateContext>;
