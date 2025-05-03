import { HttpClientApi } from "../http/api";
import { SettingsManager } from "./manager";
import { ISettingsModuleAccessor } from "./moduleAccessor";
export interface ISettingsApi {
}
/**
 * Settings API. Provides settings to the application settings groupped by modules.
 */
export declare class SettingsApi implements ISettingsApi {
    readonly _modules: Map<string, ISettingsModuleAccessor>;
    readonly _settingManager: SettingsManager;
    /**
     * Retrieves the settings for a module by name, creating a new module settings object if it doesn't already exist.
     *
     * @param {string} name - The name of the module
     * @return {ISettingsModuleAccessor} The settings for the specified module
     */
    getModuleSettings(name: string): ISettingsModuleAccessor;
    constructor(httpClient: HttpClientApi);
}
