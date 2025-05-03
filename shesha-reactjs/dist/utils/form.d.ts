import { FormInstance } from 'antd';
import { YesNoInherit } from '../interfaces/formDesigner';
import { FormIdentifier, FormMode } from '../providers/form/models';
import { ConfigurationItemsViewMode } from '../providers/appConfigurator/models';
interface IDataWithFields {
    _formFields: string[];
    [key: string]: any;
}
export declare const GHOST_PAYLOAD_KEY = "_&@#GH0ST";
export declare const getFieldNames: (data: object) => string[];
export declare function addFormFieldsList<TData = any>(formData: TData, nonFormData: object, form: FormInstance): IDataWithFields;
export declare const getFormFullName: (moduleName: string, name: string) => string;
export declare const appendFormData: (formData: FormData, key: string, data: any) => void;
export declare const jsonToFormData: (data: any) => FormData;
export declare const hasFiles: (data: any) => boolean;
export declare const removeGhostKeys: (form: any) => any;
export declare const evaluateYesNo: (value: YesNoInherit, formMode: FormMode) => boolean;
export declare const getFormCacheKey: (formId: FormIdentifier, configurationItemMode: ConfigurationItemsViewMode) => string;
/**
 * Convert size value (numeric or string) to a valid css property value. Numeric values are converted to pixels, string values remain as is.
 */
export declare const toSizeCssProp: (value: string | number) => string | undefined;
export {};
