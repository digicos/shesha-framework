import { FC } from 'react';
import { IModelItem } from '../../../../interfaces/modelConfigurator';
export interface IItemsContainerProps {
    index?: number[];
    items: IModelItem[];
}
export declare const ItemsContainer: FC<IItemsContainerProps>;
export default ItemsContainer;
