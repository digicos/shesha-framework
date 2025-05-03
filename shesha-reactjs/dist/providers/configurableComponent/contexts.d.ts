import { IFlagsSetters, IFlagsState } from '../../interfaces';
import { IConfigurableComponentProps } from './models';
export type IFlagProgressFlags = 'load' | 'save';
export type IFlagSucceededFlags = 'load' | 'save';
export type IFlagErrorFlags = 'load' | 'save';
export type IFlagActionedFlags = '__DEFAULT__';
export interface ILayoutProps {
    span: number;
}
export interface IConfigurableComponentStateContext<TSettings = any> extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags>, IConfigurableComponentProps {
    settings: TSettings;
}
export interface IComponentLoadPayload {
}
export interface IComponentLoadErrorPayload {
    error: string;
}
export interface IComponentSavePayload {
}
export interface IComponentSaveErrorPayload {
    error: string;
}
export interface IComponentSaveSuccessPayload {
    settings: object;
}
export interface IComponentLoadSuccessPayload<TSettings = any> {
    id?: string;
    name?: string;
    description?: string;
    settings: TSettings;
}
export interface IConfigurableComponentActionsContext<TSettings extends any> extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    load: () => void;
    save: (settings: TSettings) => Promise<void>;
}
export interface IConfigurableComponentContext<TSettings> extends IConfigurableComponentStateContext<TSettings>, IConfigurableComponentActionsContext<TSettings> {
}
export declare const getContextInitialState: <TSettings extends unknown>(defaultSettings: TSettings) => IConfigurableComponentStateContext<TSettings>;
export declare const getConfigurableComponentStateContext: <TSettings extends unknown>(initialState: IConfigurableComponentStateContext<TSettings>) => import("react").Context<IConfigurableComponentStateContext<TSettings>>;
export declare const getConfigurableComponentActionsContext: <TSettings extends unknown>() => import("react").Context<IConfigurableComponentActionsContext<TSettings>>;
