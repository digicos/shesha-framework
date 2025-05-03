import { ILoadSettingPayload } from './contexts';
export declare enum SettingsActionEnums {
    LoadSettingRequest = "LOAD_SETTING_REQUEST",
    LoadSettingSuccess = "LOAD_SETTING_SUCCESS",
    LoadSettingFailed = "LOAD_SETTING_FAILED"
}
export declare const loadSettingAction: import("redux-actions").ActionFunction1<ILoadSettingPayload, import("redux-actions").Action<ILoadSettingPayload>>;
