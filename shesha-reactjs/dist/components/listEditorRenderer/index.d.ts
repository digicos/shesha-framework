import { FC, PropsWithChildren } from 'react';
import { ISidebarProps } from './models';
export interface IListEditorRendererProps extends PropsWithChildren<any> {
    /**
     * Sidebar props
     */
    sidebarProps?: ISidebarProps;
}
export declare const ListEditorRenderer: FC<IListEditorRendererProps>;
