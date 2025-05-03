import { SettingsManager } from "./manager";
/**
 * Setting value accessor. It allows to read and write specified setting value.
 */
export interface ISettingAccessor<Value = any> {
    getValueAsync: () => Promise<Value>;
    setValueAsync: (value: Value) => Promise<void>;
}
/**
 * Setting value accessor. It allows to read and write specified setting value.
 */
export declare class SettingAccessor<Value = any> implements ISettingAccessor<Value> {
    readonly _name: string;
    readonly _moduleAccessor: string;
    readonly _categoryAccessor: string;
    readonly _settingManager: SettingsManager;
    constructor(settingManager: SettingsManager, moduleAccessor: string, categoryAccessor: string, name: string);
    /**
     * Reads setting value
     *
     * @returns setting value
     */
    getValueAsync(): Promise<Value>;
    /**
     * Writes setting value
     * @param value New value
     * @returns Promise that will be resolved when value is written
     */
    setValueAsync(value: Value): Promise<void>;
}
