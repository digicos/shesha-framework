import { IButtonGroup, IConfigurableFormComponent, IToolboxComponent } from '../../index';
interface IProfileDropdown extends IConfigurableFormComponent {
    items?: IButtonGroup[];
    subText?: string;
    subTextColor?: string;
    subTextFontSize?: string;
    subTextStyle?: string;
}
declare const ProfileDropdown: IToolboxComponent<IProfileDropdown>;
export default ProfileDropdown;
