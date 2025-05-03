import { CSSProperties, FC, ReactNode } from 'react';
export interface ILayoutHeadingProps {
    extra?: ReactNode | (() => ReactNode);
    title?: string;
    style?: CSSProperties;
    className?: string;
}
export declare const LayoutHeading: FC<ILayoutHeadingProps>;
export default LayoutHeading;
