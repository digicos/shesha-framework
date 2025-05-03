import { IConfigurableFormComponent } from '../../providers/form/models';
import { ISubFormProviderProps } from '../../providers/subForm/interfaces';
import { IToolboxComponent } from '../../interfaces';
export interface ISubFormComponentProps extends Omit<ISubFormProviderProps, 'labelCol' | 'wrapperCol'>, IConfigurableFormComponent {
    labelCol?: number;
    wrapperCol?: number;
}
declare const SubFormComponent: IToolboxComponent<ISubFormComponentProps>;
export default SubFormComponent;
