import React, { MutableRefObject } from 'react';
import { IConfigurableFormComponent, FormMarkup } from '../../providers/form/models';
import { IFormLayoutSettings, ISettingsFormInstance, IToolboxComponent } from '../../interfaces';
export interface IProps<TModel extends IConfigurableFormComponent> {
    readOnly: boolean;
    model: TModel;
    markup: FormMarkup;
    onSave: (model: TModel) => void;
    onCancel: () => void;
    onValuesChange?: (changedValues: any, values: TModel) => void;
    toolboxComponent: IToolboxComponent;
    formRef?: MutableRefObject<ISettingsFormInstance | null>;
    propertyFilter?: (name: string) => boolean;
    layoutSettings?: IFormLayoutSettings;
}
declare function GenericSettingsForm<TModel extends IConfigurableFormComponent>({ readOnly, onSave, model, markup, onValuesChange, toolboxComponent, formRef, propertyFilter, layoutSettings, }: IProps<TModel>): React.JSX.Element;
export default GenericSettingsForm;
