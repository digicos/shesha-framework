import { FC } from 'react';
import { IConfigurableActionConfiguration } from '../../providers';
export interface IPermissionedObjectsTreeProps {
    objectsType?: string;
    height?: string;
    /**
     * A callback for when the value of this component changes
     */
    onChange?: any;
    formComponentName?: string;
    formComponentId?: string;
    onSelectAction?: IConfigurableActionConfiguration;
}
export declare const PermissionedObjectsTree: FC<IPermissionedObjectsTreeProps>;
export default PermissionedObjectsTree;
