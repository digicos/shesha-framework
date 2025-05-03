import { IRadioProps } from './utils';
import { IToolboxComponent } from '../../interfaces';
interface IEnhancedRadioProps extends Omit<IRadioProps, 'style'> {
    style?: string;
}
declare const Radio: IToolboxComponent<IEnhancedRadioProps>;
export default Radio;
