import { FC } from 'react';
import { IHasCodeTemplate, IMonacoEditorProps } from '../models';
export interface IConstrainedCodeEditorProps extends IMonacoEditorProps, IHasCodeTemplate {
}
/**
 * Code editor constrained according ot he provided template.
 *
 * @param {IConstrainedCodeEditorProps} props - the props for the component
 * @return {JSX.Element} the constrained code editor component
 */
export declare const ConstrainedCodeEditor: FC<IConstrainedCodeEditorProps>;
