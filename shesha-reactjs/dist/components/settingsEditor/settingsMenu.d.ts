import { FC } from 'react';
import { IFrontEndApplication, ISettingConfiguration } from './provider/models';
export interface ISettingsMenuProps {
}
interface ISettingItem {
    config: ISettingConfiguration;
    app?: IFrontEndApplication;
}
export interface ISettingApplication {
    name: string;
    visible?: boolean;
    settings: ISettingGroup[];
}
export interface ISettingGroup {
    name: string;
    visible?: boolean;
    settings: ISettingItem[];
}
export declare const SettingsMenu: FC<ISettingsMenuProps>;
export default SettingsMenu;
