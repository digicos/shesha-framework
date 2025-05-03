import { FormItemProps, FormProps, InputProps } from 'antd';
import { FC } from 'react';
interface IProps {
    readonly confirmPlaceholder: string;
    readonly errorMessage?: string;
    readonly formItemProps: FormItemProps;
    readonly formItemConfirmProps?: FormItemProps;
    readonly formProps?: FormProps;
    readonly inputProps: InputProps;
    readonly passwordLength: number;
    readonly placeholder: string;
}
export declare const PasswordCombo: FC<IProps>;
export default PasswordCombo;
