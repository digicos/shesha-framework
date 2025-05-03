import { FC } from 'react';
import { IConfigurableFormComponent } from '../../providers';
import { IToolboxComponent } from '../../interfaces';
export interface IContextPropertyAutocompleteComponentProps extends IConfigurableFormComponent {
    dropdownStyle?: string;
    mode?: 'single' | 'multiple';
    modelType?: string;
    autoFillProps?: boolean;
}
export interface IContextPropertyAutocompleteProps extends Omit<IContextPropertyAutocompleteComponentProps, 'type' | 'propertyName'> {
    defaultModelType: string;
    formData: any;
    onValuesChange?: (changedValues: any) => void;
}
export declare const ContextPropertyAutocomplete: FC<IContextPropertyAutocompleteProps>;
declare const ContextPropertyAutocompleteComponent: IToolboxComponent<IContextPropertyAutocompleteComponentProps>;
export default ContextPropertyAutocompleteComponent;
