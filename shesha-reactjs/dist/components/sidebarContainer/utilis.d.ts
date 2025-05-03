import { ISidebarProps } from './models';
interface PanelSizes {
    sizes: number[];
    maxSizes: number[];
    minSizes?: number[];
}
declare function getPanelSizes(leftOpen: boolean, rightOpen: boolean, leftSidebarProps?: ISidebarProps, rightSidebarProps?: ISidebarProps, allowFullCollapse?: boolean): PanelSizes;
export { getPanelSizes };
