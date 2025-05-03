import React from 'react';
import { FormMarkup } from '../../providers/form/models';
import { IConfigurableActionArguments } from '../../interfaces/configurableAction';
export interface IProps<TModel extends IConfigurableActionArguments> {
    model: TModel;
    markup: FormMarkup;
    onSave: (model: TModel) => void;
    onCancel: () => void;
    onValuesChange?: (changedValues: any, values: TModel) => void;
    readOnly?: boolean;
}
declare function GenericArgumentsEditor<TModel extends IConfigurableActionArguments>({ onSave, model, markup, onValuesChange, readOnly, }: IProps<TModel>): React.JSX.Element;
export default GenericArgumentsEditor;
