import { IToolboxComponent } from '../../../interfaces';
import { IConfigurableFormComponent } from '../../../providers/form/models';
import { IConfigurableActionConfiguration } from '../../../index';
export interface IPermissionedObjectsTreeComponentProps extends IConfigurableFormComponent {
    objectsType?: string;
    height?: string;
    /**
     * A callback for when the value of this component changes
     */
    onChange?: any;
    onSelectAction?: IConfigurableActionConfiguration;
}
declare const PermissionedObjectsTreeComponent: IToolboxComponent<IPermissionedObjectsTreeComponentProps>;
export default PermissionedObjectsTreeComponent;
