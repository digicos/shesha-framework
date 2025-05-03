import { FormInstance } from 'antd';
import { ModelConfigurationDto } from '../../apis/modelConfigurations';
import { IModelItem } from '../../interfaces/modelConfigurator';
export interface IUpdateItemSettingsPayload {
    id: string;
    settings: IModelItem;
}
export interface IModelConfiguratorStateContext {
    id?: string;
    modelConfiguration?: ModelConfigurationDto;
    form?: FormInstance;
}
export interface IModelConfiguratorActionsContext {
    changeModelId: (id: string) => void;
    load: () => void;
    save: (value: ModelConfigurationDto) => Promise<ModelConfigurationDto>;
    submit: () => void;
    getModelSettings: () => ModelConfigurationDto;
}
export declare const MODEL_CONFIGURATOR_CONTEXT_INITIAL_STATE: IModelConfiguratorStateContext;
export declare const ModelConfiguratorStateContext: import("react").Context<IModelConfiguratorStateContext>;
export declare const ModelConfiguratorActionsContext: import("react").Context<IModelConfiguratorActionsContext>;
