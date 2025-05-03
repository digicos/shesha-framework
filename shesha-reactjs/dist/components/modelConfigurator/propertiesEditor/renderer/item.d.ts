import { ContainerRenderer } from './complexProperty';
import { FC } from 'react';
import { IModelItem } from '../../../../interfaces/modelConfigurator';
export interface IItemProps {
    itemProps: IModelItem;
    index: number[];
    key: string;
    containerRendering: ContainerRenderer;
}
export declare const Item: FC<IItemProps>;
