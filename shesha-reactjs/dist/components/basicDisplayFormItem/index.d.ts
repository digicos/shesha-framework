import { FC } from 'react';
import { FormItemProps } from 'antd/lib/form/FormItem';
export interface IBasicDisplayFormItemProps extends FormItemProps {
    notProvidedText?: string;
}
export declare const BasicDisplayFormItem: FC<IBasicDisplayFormItemProps>;
export default BasicDisplayFormItem;
