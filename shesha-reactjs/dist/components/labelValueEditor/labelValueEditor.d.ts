import { FC } from 'react';
import { ICodeExposedVariable } from '../../components/codeVariablesTable';
import { ILabelValueEditorPropsBase } from './interfaces';
export interface ILabelValueItem {
    [key: string]: string;
}
export interface ILabelValueEditorProps extends ILabelValueEditorPropsBase {
    /**
     * Selected value
     */
    value?: ILabelValueItem[];
    /**
     * On change event handler
     */
    onChange?: (newValue: ILabelValueItem[]) => void;
    mode?: 'dialog' | 'inline';
    exposedVariables?: ICodeExposedVariable[];
    description?: string;
    readOnly?: boolean;
}
declare const LabelValueEditor: FC<ILabelValueEditorProps>;
export { LabelValueEditor };
