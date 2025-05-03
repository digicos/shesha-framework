import { FC, PropsWithChildren } from 'react';
import { IConfigurableTheme } from './contexts';
export interface ThemeProviderProps {
    prefixCls?: string;
    iconPrefixCls?: string;
    themeConfigKey?: string;
}
declare const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>>;
declare function useThemeState(): import("./contexts").IThemeStateContext;
declare function useThemeActions(): import("./contexts").IThemeActionsContext;
declare function useTheme(): {
    changeTheme: (theme: IConfigurableTheme) => void;
    theme?: IConfigurableTheme;
    prefixCls: string;
    iconPrefixCls: string;
    labelSpan: number;
    componentSpan: number;
};
export { ThemeProvider, useTheme, useThemeActions, useThemeState, type IConfigurableTheme };
