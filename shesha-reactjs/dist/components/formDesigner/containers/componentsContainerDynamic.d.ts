import { FC } from 'react';
import { IComponentsContainerProps } from './componentsContainer';
export interface IComponentsContainerDynamicProps extends Omit<IComponentsContainerProps, 'dynamicComponents'>, Required<Pick<IComponentsContainerProps, 'dynamicComponents'>> {
}
export declare const ComponentsContainerDynamic: FC<IComponentsContainerProps>;
