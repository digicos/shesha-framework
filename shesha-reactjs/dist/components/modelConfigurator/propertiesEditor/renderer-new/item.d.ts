import { ContainerRenderer } from './complexProperty';
import { FC } from 'react';
import { IModelItem } from '../../../../interfaces/modelConfigurator';
import { ItemChangeDetails } from '../../../../components/listEditor';
export interface IItemProps {
    itemProps: IModelItem;
    index: number[];
    onChange: (newValue: IModelItem, changeDetails: ItemChangeDetails) => void;
    containerRendering: ContainerRenderer;
}
export declare const Item: FC<IItemProps>;
