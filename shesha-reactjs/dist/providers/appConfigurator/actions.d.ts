import { ApplicationMode, ConfigurationItemsViewMode } from './models';
export declare enum AppConfiguratorActionEnums {
    SwitchMode = "SWITCH_MODE",
    ToggleEditModeConfirmation = "TOGGLE_EDIT_MODE_CONFIRMATION",
    ToggleCloseEditModeConfirmation = "TOGGLE_CLOSE_EDIT_MODE_CONFIRMATION",
    SwitchConfigurationItemsMode = "SWITCH_CONFIGURATION_ITEMS_MODE",
    ToggleFormInfoBlock = "TOGGLE_FORM_INFO_BLOCK"
}
export declare const toggleShowInfoBlockAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const switchApplicationModeAction: import("redux-actions").ActionFunction1<ApplicationMode, import("redux-actions").Action<ApplicationMode>>;
export declare const switchConfigurationItemModeAction: import("redux-actions").ActionFunction1<ConfigurationItemsViewMode, import("redux-actions").Action<ConfigurationItemsViewMode>>;
export declare const toggleEditModeConfirmationAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const toggleCloseEditModeConfirmationAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
