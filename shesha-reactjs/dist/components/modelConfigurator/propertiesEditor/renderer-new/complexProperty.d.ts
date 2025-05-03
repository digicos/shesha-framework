import React, { FC } from 'react';
import { IModelItem } from '../../../../interfaces/modelConfigurator';
import { ItemChangeDetails } from '../../../../components/listEditor';
export interface IContainerRenderArgs {
    index?: number[];
    items: IModelItem[];
    onChange?: (items: IModelItem[], changeDetails: ItemChangeDetails) => void;
}
export type ContainerRenderer = (args: IContainerRenderArgs) => React.ReactNode;
export interface IProps {
    index: number[];
    data: IModelItem;
    containerRendering: ContainerRenderer;
    onChange: (newValue: IModelItem, changeDetails: ItemChangeDetails) => void;
}
export declare const ComplexProperty: FC<IProps>;
