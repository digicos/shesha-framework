import { FC } from 'react';
import { IConfigurableFormComponent } from '../../interfaces';
export interface IConfigurableFormComponentProps {
    model: IConfigurableFormComponent;
}
declare const DynamicComponent: FC<IConfigurableFormComponentProps>;
export default DynamicComponent;
