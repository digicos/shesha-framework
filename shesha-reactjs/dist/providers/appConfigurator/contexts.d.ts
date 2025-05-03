import { ApplicationMode, ConfigurationItemsViewMode } from './models';
export interface IAppStateContext {
    editModeConfirmationVisible: boolean;
    closeEditModeConfirmationVisible: boolean;
    mode: ApplicationMode;
    configurationItemMode: ConfigurationItemsViewMode;
    formInfoBlockVisible: boolean;
}
export interface IAppActionsContext {
    switchApplicationMode: (mode: ApplicationMode) => void;
    switchConfigurationItemMode: (mode: ConfigurationItemsViewMode) => void;
    toggleEditModeConfirmation: (visible: boolean) => void;
    toggleCloseEditModeConfirmation: (visible: boolean) => void;
    toggleShowInfoBlock: (visible: boolean) => void;
}
export declare const APP_CONTEXT_INITIAL_STATE: IAppStateContext;
export declare const AppConfiguratorStateContext: import("react").Context<IAppStateContext>;
export declare const AppConfiguratorActionsContext: import("react").Context<IAppActionsContext>;
