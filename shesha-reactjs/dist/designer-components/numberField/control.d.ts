import { FC } from 'react';
import { INumberFieldComponentProps } from './interfaces';
interface IProps {
    disabled: boolean;
    model: INumberFieldComponentProps;
    onChange?: Function;
    value?: number;
}
declare const NumberFieldControl: FC<IProps>;
export default NumberFieldControl;
