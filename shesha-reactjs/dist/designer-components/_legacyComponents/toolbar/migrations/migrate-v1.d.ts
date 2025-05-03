import { ButtonType } from 'antd/lib/button';
import { IConfigurableFormComponent } from '../../../../interfaces';
import { IToolbarProps } from './models';
import { SettingsMigrationContext } from '../../../../interfaces';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
export interface IToolbarPropsV0 extends IConfigurableFormComponent {
    items: ToolbarItemPropsV0[];
}
type ToolbarItemTypeV0 = 'item' | 'group';
type ButtonGroupTypeV0 = 'inline' | 'dropdown';
type ToolbarItemPropsV0 = IToolbarButtonV0 | IButtonGroupV0;
type ToolbarItemSubTypeV0 = 'button' | 'separator' | 'line';
type ButtonActionTypeV0 = 'navigate' | 'dialogue' | 'executeScript' | 'executeFormAction' | 'customAction' | 'submit' | 'reset' | 'startFormEdit' | 'cancelFormEdit';
interface IToolbarItemBaseV0 {
    id: string;
    name: string;
    label: string;
    tooltip?: string;
    sortOrder: number;
    danger?: boolean;
    itemType: ToolbarItemTypeV0;
    groupType?: ButtonGroupTypeV0;
    icon?: string;
    buttonType?: ButtonType;
    customVisibility?: string;
    customEnabled?: string;
    permissions?: string[];
}
interface IToolbarButtonV0 extends IToolbarItemBaseV0 {
    itemSubType: ToolbarItemSubTypeV0;
    buttonAction?: ButtonActionTypeV0;
    refreshTableOnSuccess?: boolean;
    targetUrl?: string;
    /**
     * @deprecated - use customAction. It is named that way to be consistent with the
     */
    formAction?: string;
    customAction?: string;
    customActionParameters?: string;
    actionScript?: string;
    size?: SizeType;
    modalFormId?: string;
    modalTitle?: string;
    modalWidth?: number;
    modalActionOnSuccess?: 'keepOpen' | 'navigateToUrl' | 'close' | undefined;
    showConfirmDialogBeforeSubmit?: boolean;
    modalConfirmDialogMessage?: string;
    onSuccessScript?: string;
    onErrorScript?: string;
}
interface IButtonGroupV0 extends IToolbarItemBaseV0 {
    childItems?: ToolbarItemPropsV0[];
}
export declare const migrateV0toV1: (model: IToolbarPropsV0, context: SettingsMigrationContext) => IToolbarProps;
export {};
