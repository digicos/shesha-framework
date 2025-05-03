import { FC } from 'react';
import { IModelItem } from '../../../../interfaces/modelConfigurator';
export interface IModelItemProperties {
    item?: IModelItem;
    onChange?: (item: IModelItem) => void;
}
export declare const ModelItemProperties: FC<IModelItemProperties>;
export default ModelItemProperties;
