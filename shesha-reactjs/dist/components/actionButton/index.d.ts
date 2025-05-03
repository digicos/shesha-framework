import React, { FC } from 'react';
import { IErrorInfo } from '../../interfaces/errorInfo';
import { ButtonShape, ButtonType } from 'antd/es/button/buttonHelpers';
export interface IActionButtonProps {
    type?: ButtonType;
    shape?: ButtonShape;
    title: string;
    icon?: React.ReactNode;
    executer: () => void;
    confirmationText?: string;
    isVisible: boolean;
    loading?: boolean;
    error?: IErrorInfo;
}
declare const ActionButton: FC<IActionButtonProps>;
export default ActionButton;
