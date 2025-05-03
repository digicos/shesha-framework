import { SettingsCategoryAccessor } from "./categoryAccessor";
import { BaseAccessor } from "../common/baseAccessor";
import { SettingsManager } from "./manager";
export interface ISettingsModuleAccessor {
}
/**
 * Settings: module accessor
 */
export declare class SettingsModuleAccessor extends BaseAccessor<SettingsCategoryAccessor, SettingsManager> implements ISettingsModuleAccessor {
    createChild: (accessor: string) => SettingsCategoryAccessor;
}
