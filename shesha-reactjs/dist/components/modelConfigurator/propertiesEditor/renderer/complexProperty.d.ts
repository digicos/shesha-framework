import React, { FC } from 'react';
import { IModelItem } from '../../../../interfaces/modelConfigurator';
export interface IContainerRenderArgs {
    index?: number[];
    items: IModelItem[];
}
export type ContainerRenderer = (args: IContainerRenderArgs) => React.ReactNode;
export interface IProps extends IModelItem {
    index: number[];
    containerRendering: ContainerRenderer;
}
export declare const ComplexProperty: FC<IProps>;
export default ComplexProperty;
