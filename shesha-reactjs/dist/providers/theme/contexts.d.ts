import { Theme } from 'antd/lib/config-provider/context';
interface ITextTheme {
    default?: string;
    secondary?: string;
    link?: string;
}
export interface IConfigurableTheme {
    application?: Theme;
    sidebar?: 'dark' | 'light';
    sidebarBackground?: string;
    layoutBackground?: string;
    text?: ITextTheme;
    labelSpan?: number;
    componentSpan?: number;
}
export interface IThemeStateContext {
    readonly theme?: IConfigurableTheme;
    prefixCls: string;
    iconPrefixCls: string;
    labelSpan: number;
    componentSpan: number;
}
export interface IThemeActionsContext {
    changeTheme: (theme: IConfigurableTheme) => void;
}
export declare const THEME_CONTEXT_INITIAL_STATE: IThemeStateContext;
export declare const UiStateContext: import("react").Context<IThemeStateContext>;
export declare const UiActionsContext: import("react").Context<IThemeActionsContext>;
export {};
