import { FC } from 'react';
import { IConfigurableFormComponent, IToolboxComponent } from '../../../interfaces';
export interface IComponentPropertiesEditrorProps {
    componentModel: IConfigurableFormComponent;
    readOnly: boolean;
    toolboxComponent: IToolboxComponent;
}
export declare const ComponentProperties: FC<IComponentPropertiesEditrorProps>;
