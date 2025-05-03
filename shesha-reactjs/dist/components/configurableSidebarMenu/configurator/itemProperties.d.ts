import { FC } from 'react';
import { ISidebarMenuItem } from '../../../interfaces/sidebar';
export interface ISidebarItemPropertiesProps {
    item?: ISidebarMenuItem;
    onChange?: (item: ISidebarMenuItem) => void;
    readOnly: boolean;
}
export declare const SidebarItemProperties: FC<ISidebarItemPropertiesProps>;
