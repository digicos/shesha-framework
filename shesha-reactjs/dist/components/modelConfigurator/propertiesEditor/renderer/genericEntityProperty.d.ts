import { FC } from 'react';
import { IModelItem } from '../../../../interfaces/modelConfigurator';
export interface IProps extends IModelItem {
    index: number[];
}
export declare const GenericEntityProperty: FC<IProps>;
export default GenericEntityProperty;
