import { SettingsManager } from "./manager";
import { SettingAccessor } from "./settingAccessor";
import { BaseAccessor } from "../common/baseAccessor";
export interface ISettingsCategoryAccessor {
}
/**
 * Settings category API
 */
export declare class SettingsCategoryAccessor extends BaseAccessor<SettingAccessor, SettingsManager> implements ISettingsCategoryAccessor {
    readonly _moduleAccessor: string;
    constructor(settingManager: SettingsManager, moduleAccessor: string, name: string);
    createChild: (accessor: string) => SettingAccessor<any>;
}
