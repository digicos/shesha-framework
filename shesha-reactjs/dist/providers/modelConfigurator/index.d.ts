import { FormInstance } from 'antd';
import { FC, MutableRefObject, PropsWithChildren } from 'react';
import { ModelConfigurationDto } from '../../apis/modelConfigurations';
import { IModelConfiguratorInstance } from './interfaces';
export interface IModelConfiguratorProviderPropsBase {
    baseUrl?: string;
}
export interface IModelConfiguratorProviderProps {
    id?: string;
    form: FormInstance;
    configuratorRef?: MutableRefObject<IModelConfiguratorInstance | null>;
}
declare const ModelConfiguratorProvider: FC<PropsWithChildren<IModelConfiguratorProviderProps>>;
declare function useModelConfigurator(): {
    changeModelId: (id: string) => void;
    load: () => void;
    save: (value: ModelConfigurationDto) => Promise<ModelConfigurationDto>;
    submit: () => void;
    getModelSettings: () => ModelConfigurationDto;
    id?: string;
    modelConfiguration?: ModelConfigurationDto;
    form?: FormInstance;
};
export { ModelConfiguratorProvider, useModelConfigurator };
