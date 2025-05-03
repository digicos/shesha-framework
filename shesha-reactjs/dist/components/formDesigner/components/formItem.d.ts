import React, { ReactNode } from 'react';
import { IConfigurableFormComponent } from '../../../providers/form/models';
import { ColProps, FormItemProps } from 'antd';
export type IConfigurableFormItemChildFunc = (value: any, onChange: (...args: any[]) => void, propertyName?: string) => ReactNode;
export interface IConfigurableFormItemProps {
    model: IConfigurableFormComponent;
    readonly children?: ReactNode | IConfigurableFormItemChildFunc;
    className?: string;
    valuePropName?: string;
    initialValue?: any;
    customVisibility?: string;
    wrapperCol?: ColProps;
    labelCol?: ColProps;
}
export interface IConfigurableFormItem_FormProps {
    formItemProps: FormItemProps;
    readonly children?: IConfigurableFormItemChildFunc;
    valuePropName?: string;
}
declare const _default: React.NamedExoticComponent<IConfigurableFormItemProps>;
export default _default;
