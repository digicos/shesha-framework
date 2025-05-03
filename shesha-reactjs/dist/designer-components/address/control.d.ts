import { FC } from 'react';
import { IAddressCompomentProps } from './models';
interface IAutoCompletePlacesFieldProps extends IAddressCompomentProps {
    value?: any;
    onChange?: (...args: any[]) => void;
}
declare const AutoCompletePlacesControl: FC<IAutoCompletePlacesFieldProps>;
export default AutoCompletePlacesControl;
