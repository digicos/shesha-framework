import { FC } from 'react';
import { IModelItem } from '../../../interfaces/modelConfigurator';
export interface IPropertiesEditorComponentProps {
}
export interface IPropertiesEditorProps extends IPropertiesEditorComponentProps {
    allowAdd?: Boolean;
    value?: IModelItem[];
    onChange?: (value: IModelItem[]) => void;
}
export declare const PropertiesEditor: FC<IPropertiesEditorProps>;
export declare const PropertiesEditorComponent: FC<IPropertiesEditorComponentProps>;
