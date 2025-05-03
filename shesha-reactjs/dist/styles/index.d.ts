import { FullToken } from "antd-style";
export declare const sheshaStyles: {
    paddingSM: number;
    paddingMD: number;
    paddingLG: number;
    layoutHeaderHeight: string;
    pageHeadingHeight: string;
    pageToolbarHeight: string;
    border: string;
    columnFilterHeight: string;
    transition: string;
    mediaPhoneLg: string;
    flexCenterAlignedSpaceBetween: string;
    thinScrollbars: string;
    verticalSettingsClass: string;
};
export declare const getTextHoverEffects: (token: FullToken) => string;
export declare const getWarningHoverEffects: (token: FullToken) => string;
export interface SheshaStyleTokens {
}
declare const createStyles: <Props, Input extends import("antd-style").BaseReturnType = import("antd-style").BaseReturnType>(styleOrGetStyle: import("antd-style").StyleOrGetStyleFn<Input, Props>, options?: import("antd-style").ClassNameGeneratorOption | undefined) => (props?: Props | undefined) => import("antd-style").ReturnStyles<Input>, ThemeProvider: <T_1 = any, S = any>(props: import("antd-style").ThemeProviderProps<T_1, S>) => import("react").ReactNode;
export { createStyles, ThemeProvider };
