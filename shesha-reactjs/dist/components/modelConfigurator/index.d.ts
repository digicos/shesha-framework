import { FC, MutableRefObject } from 'react';
import { IModelConfiguratorInstance } from '../../providers/modelConfigurator/interfaces';
export interface IModelConfiguratorProps {
    id?: string;
    name?: string;
    nameSpace?: string;
    configuratorRef?: MutableRefObject<IModelConfiguratorInstance | null>;
}
export declare const ModelConfigurator: FC<IModelConfiguratorProps>;
export default ModelConfigurator;
