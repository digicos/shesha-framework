import { IToolboxComponent } from '../../interfaces';
import React from 'react';
import { IConfigurableFormComponent } from '../../providers/form/models';
export interface IProps<T extends IConfigurableFormComponent> {
    model: T;
    isVisible: boolean;
    onSave: (model: T) => Promise<void>;
    onCancel: () => void;
    formComponent: IToolboxComponent;
    readOnly: boolean;
    propertyFilter?: (name: string) => boolean;
}
declare function ComponentSettingsModal<T extends IConfigurableFormComponent>({ formComponent, isVisible, onSave, onCancel, readOnly, model, propertyFilter, }: IProps<T>): React.JSX.Element;
export default ComponentSettingsModal;
