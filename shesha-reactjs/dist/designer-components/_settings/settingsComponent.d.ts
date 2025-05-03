import { IConfigurableFormComponent } from '../../providers';
import { IToolboxComponent } from '../../interfaces';
export interface ISettingsComponentProps extends IConfigurableFormComponent {
    components?: IConfigurableFormComponent[];
    availableConstantsExpression?: string;
}
declare const SettingsComponent: IToolboxComponent<ISettingsComponentProps>;
export default SettingsComponent;
