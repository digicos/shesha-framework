import { ISidebarMenuItem } from '../../../interfaces/sidebar';
import React, { FC } from 'react';
import { ItemChangeDetails, NestedItemsRenderingArgs } from '../../../components/listEditor';
export interface ISidebarItemCommonProps {
    item: ISidebarMenuItem;
    onChange: (newValue: ISidebarMenuItem, changeDetails: ItemChangeDetails) => void;
    nestedRenderer?: (args: NestedItemsRenderingArgs<ISidebarMenuItem>) => React.ReactNode | null;
    initNewItem: (items: ISidebarMenuItem[]) => ISidebarMenuItem;
}
export declare const SidebarListItemCommon: FC<ISidebarItemCommonProps>;
