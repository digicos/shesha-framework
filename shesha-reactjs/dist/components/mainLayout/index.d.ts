import { ReactNodeOrFunc } from '../../components/nodeOrFuncRenderer';
import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import { IHtmlHeadProps } from '../../components/htmlHead';
import { MenuTheme } from 'antd/lib/menu/MenuContext';
import { IPersistedFormProps } from '../../providers';
export interface IMenuTriggerProps {
    collapsed: boolean;
}
export interface IMainLayoutProps extends IHtmlHeadProps {
    breadcrumb?: ReactNodeOrFunc;
    style?: CSSProperties;
    contentStyle?: CSSProperties;
    layoutBackgroundStyle?: CSSProperties;
    footerStyle?: CSSProperties;
    footer?: ReactNodeOrFunc;
    heading?: ReactNodeOrFunc;
    /**
     * @deprecated - if passed it will still be used, but the one from the ThemeProvider is the one being used
     */
    theme?: MenuTheme;
    fixHeading?: boolean;
    showHeading?: boolean;
    noPadding?: boolean;
    /**
     * @deprecated
     * Use headerControls instead
     */
    customComponent?: ReactNode;
    /**
     * @deprecated
     * Use headerControls instead
     */
    reference?: string;
    /**
     * Used to display the statuses of the entity as well as the reference numbers
     */
    headerControls?: ReactNodeOrFunc;
    headerFormId?: IPersistedFormProps;
}
declare const MainLayout: React.FC<React.PropsWithChildren<IMainLayoutProps>>;
/**
 * Returns the component wrapped up in a layout
 * @param page the page to be rendered within the layout
 * @returns the component wrapped up in a layout
 */
export declare const getLayout: (page: ReactElement) => JSX.Element;
export default MainLayout;
