import { FC } from 'react';
import { FormItemProps } from 'antd/lib/form/FormItem';
type PropType = 'default' | 'edit' | 'autocomplete';
export interface IDisplayFormItemProps extends FormItemProps {
    readonly mode?: PropType;
    readonly value?: string;
    readonly onValueChange?: (value?: string) => void;
    readonly onControlSave?: () => void;
}
export declare const DisplayFormItem: FC<IDisplayFormItemProps>;
export default DisplayFormItem;
