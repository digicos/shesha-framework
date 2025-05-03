import { FormInstance } from 'antd';
import { IModelMetadata, IToolboxComponentGroup } from '../../interfaces';
import { FormMode, IConfigurableFormComponent, IFormSettings } from './models';
import { IShaFormInstance } from './store/interfaces';
export interface IHasComponentGroups {
    toolboxComponentGroups: IToolboxComponentGroup[];
}
export interface IFormStateInternalContext {
    name?: string;
    formSettings: IFormSettings;
    formMode: FormMode;
    form?: FormInstance<any>;
    initialValues?: any;
    formData?: any;
    modelMetadata?: IModelMetadata;
    shaForm?: IShaFormInstance;
}
export interface IFormStateContext extends IFormStateInternalContext {
}
export interface ISetFormDataPayload {
    /** form field values */
    values: any;
    /** if true, previous data will be merged with current values */
    mergeValues: boolean;
}
export interface IFormActionsContext {
    setFormMode: (formMode: FormMode) => void;
    setFormData: (payload: ISetFormDataPayload) => void;
    isComponentFiltered: (component: IConfigurableFormComponent) => boolean;
}
/** Form initial state */
export declare const FORM_CONTEXT_INITIAL_STATE: IFormStateContext;
export interface FieldData {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
}
export interface IFormDataStateContext {
    fields: FieldData[];
}
export interface IFormDataActionsContext {
    setFields: (fields: FieldData[]) => void;
}
export declare const FormDataStateContext: import("react").Context<IFormDataStateContext>;
export declare const FormDataActionsContext: import("react").Context<IFormDataActionsContext>;
export interface ConfigurableFormInstance extends IFormActionsContext, IFormStateContext {
}
export declare const FormStateContext: import("react").Context<IFormStateContext>;
export declare const FormActionsContext: import("react").Context<IFormActionsContext>;
