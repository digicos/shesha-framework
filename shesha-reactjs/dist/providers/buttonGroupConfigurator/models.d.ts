import { ButtonType } from 'antd/lib/button';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { IConfigurableActionConfiguration } from '../../interfaces/configurableAction';
import { IDynamicActionsConfiguration } from '../../designer-components/dynamicActionsConfigurator/models';
import { EditMode } from '../../index';
type ButtonGroupItemType = 'item' | 'group';
export type ButtonGroupItemProps = IButtonGroupItem | IButtonGroup;
export type ToolbarItemSubType = 'button' | 'separator' | 'line' | 'dynamic';
export type ButtonActionType = 'navigate' | 'dialogue' | 'executeScript' | 'executeFormAction' | 'customAction' | 'submit' | 'reset' | 'startFormEdit' | 'cancelFormEdit' | 'dispatchAnEvent';
export interface IButtonGroupItemBase {
    id: string;
    name: string;
    block?: boolean;
    label?: string | React.ReactNode;
    tooltip?: string;
    sortOrder: number;
    danger?: boolean;
    hidden?: boolean;
    isDynamic?: boolean;
    itemType: ButtonGroupItemType;
    icon?: string | React.ReactNode;
    iconPosition?: 'start' | 'end';
    downIcon?: string;
    buttonType?: ButtonType;
    ghost?: boolean;
    permissions?: string[];
    style?: string;
    size?: SizeType;
    editMode?: EditMode;
    readOnly?: boolean;
    width?: string;
    height?: string;
    backgroundColor?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    borderWidth?: string;
    borderColor?: string;
    borderStyle?: 'dotted' | 'solid' | 'dashed';
    borderRadius?: string;
}
export interface IButtonGroupItem extends IButtonGroupItemBase {
    itemSubType: ToolbarItemSubType;
}
export interface IButtonItem extends IButtonGroupItem {
    actionConfiguration?: IConfigurableActionConfiguration;
}
export declare const isItem: (item: IButtonGroupItemBase) => item is IButtonGroupItem;
export interface IButtonGroup extends IButtonGroupItemBase {
    /**
     * If true, indicates that the group should be hidden when it has no visible items
     */
    hideWhenEmpty?: boolean;
    /**
     * Child items (buttons or nested groups)
     */
    childItems?: ButtonGroupItemProps[];
}
export declare const isGroup: (item: IButtonGroupItemBase) => item is IButtonGroup;
export interface IDynamicItem extends IButtonGroupItem {
    dynamicItemsConfiguration: IDynamicActionsConfiguration;
}
export declare const isDynamicItem: (item: IButtonGroupItemBase) => item is IDynamicItem;
export declare const isButtonItem: (item: IButtonGroupItemBase) => item is IButtonItem;
export {};
