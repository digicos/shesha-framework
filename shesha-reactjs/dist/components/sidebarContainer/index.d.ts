import { FC, PropsWithChildren, ReactNode } from 'react';
import { ISidebarProps } from './models';
export interface ISidebarContainerProps extends PropsWithChildren<any> {
    leftSidebarProps?: ISidebarProps;
    rightSidebarProps?: ISidebarProps;
    header?: ReactNode | (() => ReactNode);
    sideBarWidth?: number;
    allowFullCollapse?: boolean;
}
export declare const SidebarContainer: FC<ISidebarContainerProps>;
