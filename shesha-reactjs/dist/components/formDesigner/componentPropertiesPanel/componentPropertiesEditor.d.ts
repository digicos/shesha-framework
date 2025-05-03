import { FC, MutableRefObject } from 'react';
import { IFormLayoutSettings, ISettingsFormInstance, IToolboxComponent } from '../../../interfaces';
import { IConfigurableFormComponent } from '../../../providers';
export interface IComponentPropertiesEditorProps {
    toolboxComponent: IToolboxComponent;
    componentModel: IConfigurableFormComponent;
    onSave: (settings: IConfigurableFormComponent) => void;
    readOnly: boolean;
    autoSave: boolean;
    formRef?: MutableRefObject<ISettingsFormInstance | null>;
    propertyFilter?: (name: string) => boolean;
    layoutSettings?: IFormLayoutSettings;
}
export declare const ComponentPropertiesEditor: FC<IComponentPropertiesEditorProps>;
