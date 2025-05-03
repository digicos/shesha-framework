import { FormItemProps, FormProps } from 'antd';
import { IConfigurableFormComponent } from '../../interfaces';
import { IFormSettings } from '../../providers/form/models';
export interface IFormPropOptions {
    hidden: boolean;
    formData: any;
}
export interface IPasswordComponentProps extends IConfigurableFormComponent {
    placeholder?: string;
    confirmDescription?: string;
    confirmPlaceholder?: string;
    confirmLabel?: string;
    hideBorder?: boolean;
    minLength?: number;
    message?: string;
}
export declare const confirmModel: (m: IPasswordComponentProps) => IPasswordComponentProps;
export declare const getConfigModel: ({ id, propertyName: name, type }: IPasswordComponentProps) => IPasswordComponentProps;
export declare const getFormProps: (formSettings: IFormSettings) => FormProps;
export declare const getFormItemProps: (model: IPasswordComponentProps, { formData, hidden }: IFormPropOptions) => FormItemProps;
export declare const getInputProps: (model: IPasswordComponentProps, formData: any) => {
    bordered: boolean;
    size: import("antd/lib/button").ButtonSize;
    readOnly: boolean;
    style: import("react").CSSProperties;
};
export declare const incrementLastChar: (value: string) => string;
export declare const getDefaultModel: (m: IPasswordComponentProps) => IPasswordComponentProps;
