import { ColProps, FormProps } from "antd";
import { Gutter } from "antd/lib/grid/row";
export type ControlSize = 'large' | 'default' | 'small';
export interface IUiStateContext {
    readonly size?: ControlSize;
    readonly gutter?: Gutter | [Gutter, Gutter];
    readonly formItemLayout?: FormProps;
    readonly rowStyle?: React.CSSProperties;
    readonly topRowStyle?: React.CSSProperties;
    readonly modalFormItemLayout?: FormProps;
    readonly dateFormat?: string;
    readonly monthFormat?: string;
    readonly accountFormCols?: ColProps;
    readonly isRoleAppointmentVisible?: boolean;
    readonly isPersonPickerVisible?: boolean;
    readonly useColonByDefault?: boolean;
}
/** @deprecated will be removed in next major release*/
export declare const useUi: () => IUiStateContext;
