import { FC } from 'react';
import { InputNumberProps } from 'antd/lib/input-number';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import { CheckboxProps } from 'antd/lib/checkbox';
import { ColProps } from 'antd/lib/col';
import { Moment } from 'moment';
type EditableDisplayLabelType = number | string | boolean;
export interface IEditableDisplayLabelProps {
    value?: EditableDisplayLabelType;
    dateFormat?: string;
    dataType?: 'string' | 'number' | 'boolean' | 'date';
    onChange?: (value: EditableDisplayLabelType) => void;
    onStartEdit?: () => void;
    isEditing?: boolean;
    className?: string;
    label?: string;
    readOnly?: boolean;
    infoText?: string;
    inputNumberProps?: InputNumberProps;
    labelCol?: ColProps;
    wrapperCol?: ColProps;
    checkboxProps?: CheckboxProps;
    datePickerPropsProps?: PickerProps<Moment>;
    labelIconPlacement?: 'default' | 'right';
}
export declare const EditableDisplayFormItem: FC<IEditableDisplayLabelProps>;
export default EditableDisplayFormItem;
