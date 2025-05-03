import React, { FC, PropsWithChildren } from 'react';
import { IComponentsContainerProps } from '../../../components/formDesigner/containers/componentsContainer';
import { IConfigurableFormComponent } from '../../../index';
export interface ISettingContainerProps extends PropsWithChildren<IComponentsContainerProps> {
    component: IConfigurableFormComponent | undefined;
    propertyName?: string;
}
export declare const SettingComponentContainerInner: FC<ISettingContainerProps>;
export declare const SettingComponentContainer: React.NamedExoticComponent<ISettingContainerProps>;
