import { FC } from 'react';
import { IConfigurableActionConfiguration } from '../../providers';
export type PermissionsTreeMode = 'Edit' | 'Select' | 'View';
export interface IPermissionsTreeProps {
    formComponentId: string;
    formComponentName: string;
    value?: string[];
    updateKey?: string;
    onChange?: (values?: string[]) => void;
    /**
     * If true, the automplete will be in read-only mode. This is not the same sa disabled mode
     */
    readOnly?: boolean;
    height?: number;
    mode: PermissionsTreeMode;
    hideSearch?: boolean;
    searchText?: string;
    onSelectAction?: IConfigurableActionConfiguration;
}
export declare const PermissionsTree: FC<IPermissionsTreeProps>;
