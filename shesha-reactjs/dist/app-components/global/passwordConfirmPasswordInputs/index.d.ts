import { FC } from 'react';
export interface IPasswordConfirmPassword {
    password: string;
    confirmPassword: string;
}
export interface IPasswordConfirmPasswordInputsProps {
    readonly password: string;
    readonly confirmPassword: string;
    readonly setPassword: (value: string) => void;
    readonly setConfirmPassword: (value: string) => void;
    readonly passwordName?: string;
    readonly confirmPasswordName?: string;
}
declare const PasswordConfirmPasswordInputs: FC<IPasswordConfirmPasswordInputsProps>;
export default PasswordConfirmPasswordInputs;
