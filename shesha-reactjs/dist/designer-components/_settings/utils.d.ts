import { IComponentsDictionary, IConfigurableFormComponent, IPropertySetting, IToolboxComponents } from "../../interfaces";
/**
 * Checks if the provided data is an instance of IPropertySetting.
 *
 * @param {any} data - The data to be checked
 * @return {boolean} Indicates whether the data is an instance of IPropertySetting
 */
export declare const isPropertySettings: <Value = any>(data: any) => data is IPropertySetting<Value>;
export declare const getPropertySettingsFromData: (data: any, propName: string) => IPropertySetting;
export declare const updateSettingsFromValues: <T>(model: T, values: T) => T;
export declare const getValueFromPropertySettings: (value: any) => any;
export declare const getValuesFromSettings: <T>(model: T) => T;
export declare const getPropertySettingsFromValue: (value: any) => IPropertySetting;
/**
 * Update structure of components to use with Setting component
 *
 * @param toolboxComponents List of Toolbox components
 * @param components Components structure
 * @returns Updated components structure
 */
export declare const updateSettingsComponents: (toolboxComponents: IToolboxComponents, components: IConfigurableFormComponent[]) => IConfigurableFormComponent[];
export declare const updateSettingsComponentsDict: (toolboxComponents: IToolboxComponents, components: IComponentsDictionary) => IComponentsDictionary;
