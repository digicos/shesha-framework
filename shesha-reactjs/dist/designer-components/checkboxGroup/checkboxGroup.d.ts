import { IToolboxComponent } from '../../interfaces';
import { ICheckboxGroupProps } from './utils';
interface IEnhancedICheckboxGoupProps extends Omit<ICheckboxGroupProps, 'style'> {
    style?: string;
}
declare const CheckboxGroupComponent: IToolboxComponent<IEnhancedICheckboxGoupProps>;
export default CheckboxGroupComponent;
