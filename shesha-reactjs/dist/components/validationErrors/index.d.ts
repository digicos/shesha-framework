import { FC } from 'react';
import { AlertProps } from 'antd';
import { IErrorInfo } from '../../interfaces/errorInfo';
import { IAjaxResponseBase } from '../../interfaces/ajaxResponse';
import { AxiosResponse } from 'axios';
export interface IValidationErrorsProps extends AlertProps {
    error: string | IErrorInfo | IAjaxResponseBase | AxiosResponse<IAjaxResponseBase> | Error;
    renderMode?: 'alert' | 'raw';
    defaultMessage?: string;
}
/**
 * A component for displaying validation errors
 */
export declare const ValidationErrors: FC<IValidationErrorsProps>;
export default ValidationErrors;
