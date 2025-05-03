import React, { MutableRefObject } from 'react';
import { IConfigurableFormComponent } from '../../interfaces';
export interface IFormComponentProps {
    componentModel: IConfigurableFormComponent;
    componentRef: MutableRefObject<any>;
}
declare const FormComponentMemo: React.NamedExoticComponent<IFormComponentProps>;
export default FormComponentMemo;
