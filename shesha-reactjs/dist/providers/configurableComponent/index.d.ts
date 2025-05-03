import React, { Context, PropsWithChildren } from 'react';
import { IConfigurableComponentActionsContext, IConfigurableComponentStateContext } from './contexts';
import { ComponentSettingsMigrator } from '../../components/configurableComponent/index';
export interface IGenericConfigurableComponentProviderProps<TSettings extends any> {
    initialState: IConfigurableComponentStateContext<TSettings>;
    stateContext: Context<IConfigurableComponentStateContext<TSettings>>;
    actionContext: Context<IConfigurableComponentActionsContext<TSettings>>;
    name: string;
    isApplicationSpecific: boolean;
    migrator?: ComponentSettingsMigrator<TSettings>;
}
export interface IConfigurableComponentProviderProps {
    name: string;
    isApplicationSpecific: boolean;
}
export declare const createConfigurableComponent: <TSettings extends unknown>(defaultSettings: TSettings, migrator?: ComponentSettingsMigrator<TSettings>) => {
    ConfigurableComponentProvider: <T extends PropsWithChildren<IConfigurableComponentProviderProps>>(props: T) => React.JSX.Element;
    useConfigurableComponent: () => {
        load: () => void;
        save: (settings: TSettings) => Promise<void>;
        setIsInProgressFlag: (key: {
            load?: boolean;
            save?: boolean;
        }) => void;
        setSucceededFlag: (key: {
            load?: boolean;
            save?: boolean;
        }) => void;
        setFailedFlag: (key: {
            load?: boolean;
            save?: boolean;
        }) => void;
        setActionedFlag: (key: {
            __DEFAULT__?: boolean;
        }) => void;
        resetIsInProgressFlag: () => void;
        resetSucceededFlag: () => void;
        resetFailedFlag: () => void;
        resetActionedFlag: () => void;
        resetAllFlag: () => void;
        settings: TSettings;
        isInProgress?: {
            load?: boolean;
            save?: boolean;
        };
        succeeded?: {
            load?: boolean;
            save?: boolean;
        };
        error?: {
            load?: string | boolean | import("../..").IErrorInfo;
            save?: string | boolean | import("../..").IErrorInfo;
        };
        actioned?: {
            __DEFAULT__?: boolean;
        };
        id?: string;
        name?: string;
        description?: string;
    };
};
