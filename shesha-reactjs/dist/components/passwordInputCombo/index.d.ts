import { FormItemProps, FormProps, InputProps } from 'antd';
import React, { FC } from 'react';
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type EventSetType = 'value' | 'event';
interface IProps {
    readonly newPassword: string;
    readonly repeatPassword: string;
    readonly setNewPassword: (value: string | ChangeEvent) => void;
    readonly setRepeatPassword: (value: string | ChangeEvent) => void;
    readonly isPasswordOk: (value: boolean) => void;
    readonly errorMessage?: string;
    readonly eventSetType?: EventSetType;
    readonly passwordLength?: number;
    readonly inputProps?: InputProps;
    readonly placeholder?: string;
    readonly confirmPlaceholder?: string;
    readonly formProps?: FormProps;
    readonly formItemProps?: FormItemProps;
    readonly formItemConfirmProps?: FormItemProps;
}
declare const PasswordInputCombo: FC<IProps>;
export default PasswordInputCombo;
