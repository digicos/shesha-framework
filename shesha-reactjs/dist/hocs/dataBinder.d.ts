import React from 'react';
import { IConfigurableFormItemChildFunc } from '../components/formDesigner/components/formItem';
export interface IDataBinderProps {
    value?: any;
    onChange?: (...args: any[]) => void;
    children: IConfigurableFormItemChildFunc;
    valuePropName?: string;
}
declare const DataBinderMemoized: React.NamedExoticComponent<IDataBinderProps>;
export { DataBinderMemoized as DataBinder };
