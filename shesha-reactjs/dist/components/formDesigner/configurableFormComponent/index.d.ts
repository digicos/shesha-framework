import { FC, MutableRefObject } from 'react';
import { IConfigurableFormComponent } from '../../../providers';
export interface IConfigurableFormComponentDesignerProps {
    componentModel: IConfigurableFormComponent;
    componentRef: MutableRefObject<any>;
}
export declare const ConfigurableFormComponentDesigner: FC<IConfigurableFormComponentDesignerProps>;
export interface IConfigurableFormComponentProps {
    id: string;
}
export declare const ConfigurableFormComponent: FC<IConfigurableFormComponentProps>;
