import { IToolboxComponent } from '../../../interfaces';
import { IConfigurableFormComponent } from '../../../providers/form/models';
import { PermissionsTreeMode } from '../../../components/permissionsTree';
import { IConfigurableActionConfiguration } from '../../../index';
export interface IPermissionsTreeComponentProps extends IConfigurableFormComponent {
    value?: string[];
    updateKey?: string;
    onChange?: (values?: string[]) => void;
    /**
     * Whether this control is disabled
     */
    disabled?: boolean;
    /**
     * If true, the automplete will be in read-only mode. This is not the same sa disabled mode
     */
    readOnly?: boolean;
    height?: number;
    mode: PermissionsTreeMode;
    onSelectAction?: IConfigurableActionConfiguration;
}
declare const PermissionedObjectsTreeComponent: IToolboxComponent<IPermissionsTreeComponentProps>;
export default PermissionedObjectsTreeComponent;
