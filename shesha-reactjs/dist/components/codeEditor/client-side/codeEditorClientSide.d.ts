import { FC } from "react";
import { ICodeEditorProps } from "../models";
/**
 * Client-side code editor. It may use `window` or `document` objects and should be wrapped in `React.Suspense` to prevent rendering on server side
 *
 * @param {ICodeEditorProps} props - the properties for the code editor
 * @return {ReactNode} the code editor component
 */
declare const CodeEditorClientSide: FC<ICodeEditorProps>;
export default CodeEditorClientSide;
