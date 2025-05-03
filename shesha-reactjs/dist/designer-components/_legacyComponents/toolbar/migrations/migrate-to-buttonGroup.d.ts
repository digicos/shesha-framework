import { ButtonType } from 'antd/lib/button';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { IConfigurableActionConfiguration } from '../../../../providers/configurableActionsDispatcher/index';
import { IConfigurableFormComponent } from '../../../../providers/form/models';
import { ButtonGroupItemType, IToolbarProps, ToolbarItemSubType } from './models';
export interface ToolbarButtonGroupProps extends IConfigurableFormComponent {
    items: IButtonGroupButton[];
    size?: SizeType;
    permissions?: string[];
    spaceSize?: SizeType;
    isInline?: boolean;
    noStyles?: boolean;
}
interface IButtonGroupButton {
    id: string;
    name: string;
    label?: string | React.ReactNode;
    tooltip?: string;
    sortOrder: number;
    danger?: boolean;
    hidden?: boolean;
    disabled?: boolean;
    isDynamic?: boolean;
    itemType: ButtonGroupItemType;
    icon?: string;
    buttonType?: ButtonType;
    customVisibility?: string;
    customEnabled?: string;
    permissions?: string[];
    style?: string;
    size?: SizeType;
    itemSubType: ToolbarItemSubType;
    actionConfiguration?: IConfigurableActionConfiguration;
    isInline?: boolean;
}
export declare const migrateToButtonGroup: (model: IToolbarProps) => ToolbarButtonGroupProps;
export {};
