import { IConfigurableFormComponent, IToolboxComponent } from '../../../interfaces';
import { IChildTableSettingsProps } from './models';
import { IPanelComponentProps } from './migrations/migrateToTable';
export interface IChildTableComponentProps extends IChildTableSettingsProps, IConfigurableFormComponent {
    components?: IConfigurableFormComponent[];
}
declare const ChildTableComponent: IToolboxComponent<IPanelComponentProps>;
export default ChildTableComponent;
