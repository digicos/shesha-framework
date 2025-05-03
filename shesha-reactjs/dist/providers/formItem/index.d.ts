import { ColProps } from 'antd';
import { FC, PropsWithChildren } from 'react';
export interface FormItemProviderProps {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
    namePrefix?: string;
}
declare const FormItemProvider: FC<PropsWithChildren<FormItemProviderProps>>;
declare function useFormItem(): import("./contexts").IFormItemStateContext;
export { FormItemProvider, useFormItem };
