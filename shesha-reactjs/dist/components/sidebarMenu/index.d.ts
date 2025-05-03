import { FC } from 'react';
import { MenuTheme } from 'antd/lib/menu/MenuContext';
import { sidebarMenuItemToMenuItem } from './utils';
export interface ISidebarMenuProps {
    isCollapsed?: boolean;
    theme?: MenuTheme;
}
declare const SidebarMenu: FC<ISidebarMenuProps>;
type InternalSidebarMenuType = typeof SidebarMenu;
interface IInternalSidebarMenuType extends InternalSidebarMenuType {
    sidebarItemToMenuItem: typeof sidebarMenuItemToMenuItem;
}
declare const SidebarMenuInterface: IInternalSidebarMenuType;
export { SidebarMenuInterface as SidebarMenu };
