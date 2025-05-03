import React, { FC } from 'react';
import { ISidebarGroup, ISidebarMenuItem } from '../../../interfaces/sidebar';
import { ItemChangeDetails } from '../../../components/listEditor';
export interface IContainerRenderArgs {
    id?: string;
    items: ISidebarMenuItem[];
    onChange: (newValue: ISidebarMenuItem[], changeDetails: ItemChangeDetails) => void;
}
export interface ISidebarMenuGroupProps {
    item: ISidebarGroup;
    onChange: (newValue: ISidebarGroup, changeDetails: ItemChangeDetails) => void;
    containerRendering: (args: IContainerRenderArgs) => React.ReactNode;
}
export declare const SidebarListGroup: FC<ISidebarMenuGroupProps>;
