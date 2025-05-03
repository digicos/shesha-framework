import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
export interface DynamicViewComponentProps extends IConfigurableFormComponent {
}
declare const DynamicViewComponent: IToolboxComponent<DynamicViewComponentProps>;
export default DynamicViewComponent;
