import { FC } from 'react';
import { ISidebarMenuItem } from '../../../interfaces/sidebar';
export interface ISidebarConfiguratorProps {
    readOnly: boolean;
    value: ISidebarMenuItem[];
    onChange: (newValue: ISidebarMenuItem[]) => void;
}
export declare const SidebarConfigurator: FC<ISidebarConfiguratorProps>;
