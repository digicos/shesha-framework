import { FC } from 'react';
import { IInputDirection, IValue } from '../interfaces';
interface IProps {
    direction: keyof IInputDirection;
    onChange?: Function;
    readOnly?: boolean;
    type: keyof IValue;
    value?: string;
}
declare const BoxInput: FC<IProps>;
export default BoxInput;
