import { InputProps } from 'antd';
import { FC } from 'react';
export interface IEditableTagGroupProps extends Omit<InputProps, 'value' | 'onChange'> {
    value?: string[];
    defaultValue?: string;
    onChange?: (values?: string[]) => void;
}
export declare const EditableTagGroup: FC<IEditableTagGroupProps>;
export default EditableTagGroup;
