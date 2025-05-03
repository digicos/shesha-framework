import { FC, PropsWithChildren } from 'react';
import { ApplicationMode, ConfigurationItemsViewMode } from './models';
export interface IAppConfiguratorProviderProps {
}
declare const AppConfiguratorProvider: FC<PropsWithChildren<IAppConfiguratorProviderProps>>;
declare function useAppConfiguratorState(): import("./contexts").IAppStateContext;
declare function useAppConfiguratorActions(): import("./contexts").IAppActionsContext;
declare function useAppConfigurator(): {
    switchApplicationMode: (mode: ApplicationMode) => void;
    switchConfigurationItemMode: (mode: ConfigurationItemsViewMode) => void;
    toggleEditModeConfirmation: (visible: boolean) => void;
    toggleCloseEditModeConfirmation: (visible: boolean) => void;
    toggleShowInfoBlock: (visible: boolean) => void;
    editModeConfirmationVisible: boolean;
    closeEditModeConfirmationVisible: boolean;
    mode: ApplicationMode;
    configurationItemMode: ConfigurationItemsViewMode;
    formInfoBlockVisible: boolean;
};
export { AppConfiguratorProvider, useAppConfigurator, useAppConfiguratorActions, useAppConfiguratorState, type ApplicationMode, };
