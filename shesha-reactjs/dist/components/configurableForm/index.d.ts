import { FC, MutableRefObject } from 'react';
import { IConfigurableFormProps, SheshaFormProps } from './models';
import { FormInstance } from 'antd';
import { ConfigurableFormInstance } from '../../interfaces';
import { IShaFormInstance } from '../../providers/form/store/interfaces';
export type ConfigurableFormProps<Values = any> = Omit<IConfigurableFormProps<Values>, 'form' | 'formRef' | 'shaForm'> & {
    form?: FormInstance<any>;
    formRef?: MutableRefObject<Partial<ConfigurableFormInstance> | null>;
    shaFormRef?: MutableRefObject<IShaFormInstance>;
    isSettingsForm?: boolean;
} & SheshaFormProps;
export declare const ConfigurableForm: FC<ConfigurableFormProps>;
