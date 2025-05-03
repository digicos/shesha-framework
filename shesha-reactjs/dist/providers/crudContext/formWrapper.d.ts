import { FormInstance, FormProps } from 'antd';
import { FC, MutableRefObject, PropsWithChildren } from 'react';
import { IFormSettings } from '../../providers/form/models';
import { IDelayedUpdateGroup } from '../delayedUpdateProvider/models';
interface FormWrapperProps {
    initialValues: object;
    onValuesChange: FormProps['onValuesChange'];
    form: FormInstance;
    formSettings?: IFormSettings;
    delayedUpdate?: MutableRefObject<IDelayedUpdateGroup[]>;
}
export declare const FormWrapper: FC<PropsWithChildren<FormWrapperProps>>;
export {};
