import { FC } from 'react';
import { IMonacoEditorProps, IHasCodeTemplate } from '../models';
export interface ICodeEditorMayHaveTemplateProps extends IMonacoEditorProps, Partial<IHasCodeTemplate> {
}
/**
 * Code editor with optional template support.
 * If template is provided, it will be used to render the editor.
 * If template is not provided, the editor will be rendered as usual.
 *
 * @param {ICodeEditorMayHaveTemplateProps} template - the template to be passed to the ConstrainedCodeEditor or Editor component
 * @param {...restProps} restProps - any other props to be passed to the ConstrainedCodeEditor or Editor component
 * @return {JSX.Element} the rendered ConstrainedCodeEditor or Editor component
 */
export declare const CodeEditorMayHaveTemplate: FC<ICodeEditorMayHaveTemplateProps>;
