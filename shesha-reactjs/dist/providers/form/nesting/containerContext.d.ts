import React, { FC, PropsWithChildren } from 'react';
import { IComponentsContainerBaseProps } from '../../../interfaces';
export type ContainerType = FC<IComponentsContainerBaseProps>;
export declare const ComponentsContainerContext: React.Context<ContainerType>;
export interface IComponentsContainerProviderProps {
    ContainerComponent: ContainerType;
}
export declare const ComponentsContainerProvider: FC<PropsWithChildren<IComponentsContainerProviderProps>>;
export declare function useComponentContainer(): ContainerType;
