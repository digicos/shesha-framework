import React, { FC } from 'react';
import { ISidebarProps, SidebarPanelPosition } from './models';
interface SidebarPanelProps extends ISidebarProps {
    side: SidebarPanelPosition;
    allowFullCollapse: boolean;
    setIsOpenGlobal?: (React.Dispatch<React.SetStateAction<boolean>>) | undefined;
}
export declare const SidebarPanel: FC<SidebarPanelProps>;
export {};
