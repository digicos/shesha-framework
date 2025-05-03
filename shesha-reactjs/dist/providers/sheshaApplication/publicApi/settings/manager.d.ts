import { HttpClientApi } from "../http/api";
import { SettingConfigurationDto } from "./models";
import { ISettingFullAccessor, ISettingIdentifier } from "../../../../providers/settings/models";
export declare const SETTINGS_URLS: {
    GET_CONFIGURATIONS: string;
    GET_VALUE: string;
    SET_VALUE: string;
};
export declare class SettingsManager {
    #private;
    readonly _httpClient: HttpClientApi;
    resolveSettingAsync: (id: ISettingFullAccessor) => Promise<ISettingIdentifier>;
    getValueAsync: <Value = any>(id: ISettingFullAccessor) => Promise<Value>;
    setValueAsync: <Value = any>(id: ISettingFullAccessor, value: Value) => Promise<void>;
    constructor(httpClient: HttpClientApi);
    static fetchConfigurationsAsync: (httpClient: HttpClientApi) => Promise<SettingConfigurationDto[]>;
}
