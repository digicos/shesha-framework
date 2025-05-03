import { FC } from 'react';
import { ICodeExposedVariable } from '../../components/codeVariablesTable';
import { IConfigurableActionDescriptor } from '../../interfaces/configurableAction';
import { IObjectMetadata } from '../../interfaces';
export interface IActionArgumentsEditorProps {
    action: IConfigurableActionDescriptor;
    value?: any;
    onChange?: (value: any) => void;
    readOnly?: boolean;
    exposedVariables?: ICodeExposedVariable[];
    availableConstants?: IObjectMetadata;
}
export declare const ActionArgumentsEditor: FC<IActionArgumentsEditorProps>;
export default ActionArgumentsEditor;
