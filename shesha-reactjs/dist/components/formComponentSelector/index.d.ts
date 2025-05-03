import { DefaultOptionType } from 'antd/lib/select';
import { IConfigurableFormComponent } from '../../interfaces';
import { IPropertyMetadata } from '../../interfaces/metadata';
import { FC } from 'react';
export type ComponentType = 'input' | 'output';
interface ComponentSelectorValue {
    type: string;
    settings?: IConfigurableFormComponent;
}
export interface IFormComponentSelectorProps {
    componentType: ComponentType;
    noSelectionItem?: DefaultOptionType;
    value?: ComponentSelectorValue;
    onChange?: (value?: ComponentSelectorValue) => void;
    readOnly?: boolean;
    propertyMeta?: IPropertyMetadata;
}
export declare const FormComponentSelector: FC<IFormComponentSelectorProps>;
export default FormComponentSelector;
