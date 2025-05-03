import { FormItemProps } from 'antd';
import { IPasswordValidation } from '../../interfaces';
export declare const confirmPasswordValidations: (password: string, confirmPassword: string, errorMessage?: string) => FormItemProps;
export declare const getPasswordValidations: (password: string, passwordLength?: number) => IPasswordValidation;
export declare const isStrongPassword: (password: string, length: number) => boolean;
export declare const isSamePassword: (initialPassword: string, confirmPassword: string, passwordLength?: number) => boolean;
export declare const passwordValidations: (password: string, errorMessage?: string, length?: number) => FormItemProps;
