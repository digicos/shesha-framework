import { ConfigurableFormInstance, ISetFormDataPayload } from "./contexts";
import { FormMode } from "../../generic-pages/dynamic/interfaces";
import { FormInstance } from "antd";
import { IEntityEndpoints } from "../sheshaApplication/publicApi/entities/entityTypeAccessor";
import { IShaFormInstance } from "./store/interfaces";
import { IDelayedUpdateGroup } from "../delayedUpdateProvider/models";
export interface IFormSettings {
    modelType?: string;
    postUrl?: string;
    putUrl?: string;
    deleteUrl?: string;
    getUrl?: string;
    fieldsToFetch?: string[];
    /** if true then need to update components structure for using Setting component */
    isSettingsForm?: boolean;
}
type PublicFormSettings = Pick<IFormSettings, 'modelType'>;
/**
 * Form instance API
 */
export interface FormApi<Values = any> {
    /**
     * Add deferred update data to `data` object
     * @param data model data object for updating
     * @returns The deferred update data
     */
    addDelayedUpdateData: (data: Values) => IDelayedUpdateGroup[];
    /**
     * Set field value
     * @param name field name
     * @param value field value
     */
    setFieldValue: (name: string, value: any) => void;
    /**
     * Set fields value
     * @param values
     */
    setFieldsValue: (values: Values) => void;
    /**
     * Clear fields value
     */
    clearFieldsValue: () => void;
    /**
     * Submit form
     */
    submit: () => void;
    /**
     * Set form data
     * @deprecated The method should not be used
     * @param payload data payload
     */
    setFormData: (payload: ISetFormDataPayload) => void;
    /** antd form instance */
    formInstance?: FormInstance<Values>;
    /** Configurable form settings */
    formSettings: PublicFormSettings;
    /** Form mode */
    formMode: FormMode;
    /** Form data */
    data: Values;
    /** Default API endpoints (create, read, update, delete) */
    defaultApiEndpoints: IEntityEndpoints;
    /** Form arguments passed by caller */
    formArguments?: any;
}
export type ConfigurableFormPublicApi = Pick<ConfigurableFormInstance, 'setFormData' | 'form' | 'formSettings' | 'formMode' | 'formData' | 'modelMetadata'> & {
    shaForm?: IShaFormInstance;
};
export declare const getFormApi: (form: ConfigurableFormPublicApi) => FormApi;
export {};
