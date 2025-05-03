import React, { FC } from 'react';
import { CollapseProps } from 'antd/lib/collapse';
export interface ICollapsiblePanelProps extends CollapseProps {
    isActive?: boolean;
    header?: React.ReactNode;
    className?: string;
    extraClassName?: string;
    style?: React.CSSProperties;
    showArrow?: boolean;
    forceRender?: boolean;
    extra?: React.ReactNode;
    noContentPadding?: boolean;
    loading?: boolean;
    collapsedByDefault?: boolean;
    bodyColor?: string;
    isSimpleDesign?: boolean;
    hideCollapseContent?: boolean;
    hideWhenEmpty?: boolean;
}
export declare const CollapsiblePanel: FC<Omit<ICollapsiblePanelProps, 'radiusLeft' | 'radiusRight'>>;
export default CollapsiblePanel;
