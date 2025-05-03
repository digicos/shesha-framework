import { FC, PropsWithChildren } from 'react';
import { IErrorInfo } from '../../interfaces/errorInfo';
import { ISettingIdentifier } from './models';
export interface ISettingsProviderProps {
}
declare const SettingsProvider: FC<PropsWithChildren<ISettingsProviderProps>>;
declare function useSettings(require?: boolean): import("./contexts").ISettingsActionsContext;
export type LoadingState = 'waiting' | 'loading' | 'ready' | 'failed';
export interface SettingValueLoadingState<TValue = any> {
    loadingState: LoadingState;
    value?: TValue;
    error?: IErrorInfo;
}
declare const useSettingValue: <TValue = any>(settingId: ISettingIdentifier) => SettingValueLoadingState<TValue>;
export { SettingsProvider, useSettingValue, useSettings };
