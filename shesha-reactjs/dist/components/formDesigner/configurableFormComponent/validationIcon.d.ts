import { FC } from 'react';
import { IAsyncValidationError } from '../../../interfaces';
export interface IValidationIconProps {
    validationErrors: IAsyncValidationError[];
}
export declare const ValidationIcon: FC<IValidationIconProps>;
export default ValidationIcon;
