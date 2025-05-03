import { MenuProps } from 'antd';
import { ISidebarMenuItem } from '../../interfaces/sidebar';
import { IConfigurableActionConfiguration } from '../../providers/index';
type MenuItem = Required<MenuProps>['items'][number];
export interface IProps {
    item: ISidebarMenuItem;
    onButtonClick?: (itemId: string, actionConfiguration: IConfigurableActionConfiguration) => void;
    onItemEvaluation?: (item: ISidebarMenuItem) => void;
    getFormUrl: (args: any) => string;
    getUrl: (args: any) => string;
}
export declare const sidebarMenuItemToMenuItem: ({ item, onButtonClick, onItemEvaluation, getFormUrl, getUrl }: IProps) => MenuItem;
export {};
