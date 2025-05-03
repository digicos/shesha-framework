import React from 'react';
import { IConfigurableFormComponent } from '../../providers/form/models';
export interface IProps<TModel = any> {
    title?: string;
    model: TModel;
    markup: IConfigurableFormComponent[];
    onCancel: () => void;
    onSave: (model: TModel) => void;
}
export declare const ComponentSettingsModal: <TSettings extends unknown>({ title, markup, model, onCancel, onSave }: IProps<TSettings>) => React.JSX.Element;
