import { CSSProperties, FC, ReactNode } from 'react';
export interface ISectionSeparatorProps {
    id?: string;
    title?: string | ReactNode;
    containerStyle?: CSSProperties;
    titleStyle?: CSSProperties;
    tooltip?: string;
    fontSize?: number;
    fontColor?: string;
    inline?: boolean;
    dashed?: boolean;
    lineColor?: string;
    lineThickness?: number;
    lineWidth?: string;
    lineHeight?: string;
    titleMargin?: number;
    labelAlign?: 'left' | 'center' | 'right';
    orientation?: 'horizontal' | 'vertical';
    fontWeight?: string;
}
export declare const SectionSeparator: FC<ISectionSeparatorProps>;
export default SectionSeparator;
