import { FC } from 'react';
import { MenuTheme } from 'antd/lib/menu/MenuContext';
import { ISidebarMenuItem } from '../../interfaces/sidebar';
export interface ISideBarMenuProps {
    items: ISidebarMenuItem[];
    version?: number;
}
export interface IConfigurableSidebarMenuProps {
    theme?: MenuTheme;
    defaultSettings?: ISideBarMenuProps;
    name: string;
    isApplicationSpecific: boolean;
}
export declare const ConfigurableSidebarMenu: FC<IConfigurableSidebarMenuProps>;
export default ConfigurableSidebarMenu;
