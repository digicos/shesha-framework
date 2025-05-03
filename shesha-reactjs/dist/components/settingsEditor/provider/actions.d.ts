import { FormMode } from '../../../interfaces';
import { IEditorBridge, IFetchApplicationsErrorPayload, IFetchApplicationsSuccessPayload, IFetchConfigurationsErrorPayload, IFetchConfigurationsSuccessPayload, ISettingSelection, SaveStatus } from './contexts';
export declare enum SettingsEditorActionEnums {
    FetchConfigurations = "FETCH_CONFIGURATIONS",
    FetchConfigurationsSuccess = "FETCH_CONFIGURATIONS_SUCCEESS",
    FetchConfigurationsError = "FETCH_CONFIGURATIONS_ERROR",
    FetchApplications = "FETCH_APPLICATIONS",
    FetchApplicationsSuccess = "FETCH_APPLICATIONS_SUCCESS",
    FetchApplicationsError = "FETCH_APPLICATIONS_ERROR",
    SelectSetting = "SELECT_SETTING",
    SelectApplication = "SELECT_APPLICATION",
    SetEditorMode = "SET_EDITOR_MODE",
    SetEditorBridge = "SET_EDITOR_BRIDGE",
    setSaveStatus = "SET_SAVE_STATUS"
}
export declare const fetchConfigurationsAction: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
export declare const fetchConfigurationsSuccessAction: import("redux-actions").ActionFunction1<IFetchConfigurationsSuccessPayload, import("redux-actions").Action<IFetchConfigurationsSuccessPayload>>;
export declare const fetchConfigurationsErrorAction: import("redux-actions").ActionFunction1<IFetchConfigurationsErrorPayload, import("redux-actions").Action<IFetchConfigurationsErrorPayload>>;
export declare const fetchApplicationsAction: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
export declare const fetchApplicationsSuccessAction: import("redux-actions").ActionFunction1<IFetchApplicationsSuccessPayload, import("redux-actions").Action<IFetchApplicationsSuccessPayload>>;
export declare const fetchApplicationsErrorAction: import("redux-actions").ActionFunction1<IFetchApplicationsErrorPayload, import("redux-actions").Action<IFetchApplicationsErrorPayload>>;
export declare const selectSettingAction: import("redux-actions").ActionFunction1<ISettingSelection, import("redux-actions").Action<ISettingSelection>>;
export declare const selectApplicationAction: import("redux-actions").ActionFunction1<ISettingSelection, import("redux-actions").Action<ISettingSelection>>;
export declare const setEditorModeAction: import("redux-actions").ActionFunction1<FormMode, import("redux-actions").Action<FormMode>>;
export declare const setEditorBridgeAction: import("redux-actions").ActionFunction1<IEditorBridge, import("redux-actions").Action<IEditorBridge>>;
export declare const setSaveStatusAction: import("redux-actions").ActionFunction1<SaveStatus, import("redux-actions").Action<SaveStatus>>;
