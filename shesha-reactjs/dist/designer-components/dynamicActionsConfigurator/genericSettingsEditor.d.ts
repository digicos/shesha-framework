import React from 'react';
import { FormMarkup } from '../../providers/form/models';
import { IProviderSettings } from './interfaces';
export interface IProps<TModel extends IProviderSettings> {
    model: TModel;
    markup: FormMarkup;
    onSave: (model: TModel) => void;
    onCancel: () => void;
    onValuesChange?: (changedValues: any, values: TModel) => void;
    readOnly?: boolean;
}
export declare function GenericSettingsEditor<TModel extends IProviderSettings>({ onSave, model, markup, onValuesChange, readOnly, }: IProps<TModel>): React.JSX.Element;
