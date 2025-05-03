import { FC, ReactElement } from 'react';
import { IPropertySetting, PropertySettingMode } from '../../index';
export type SettingsControlChildrenType = (value: any, onChange: (val: any) => void, propertyName: string) => ReactElement;
export interface ISettingsControlProps {
    propertyName: string;
    readOnly?: boolean;
    value?: IPropertySetting;
    mode: PropertySettingMode;
    onChange?: (value: IPropertySetting) => void;
    readonly children?: SettingsControlChildrenType;
    availableConstantsExpression?: string;
}
export declare const SettingsControl: FC<ISettingsControlProps>;
export default SettingsControl;
