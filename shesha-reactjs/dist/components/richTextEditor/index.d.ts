import { CSSProperties, FC } from 'react';
export interface IRichTextEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    config?: any;
    className?: string;
    style?: CSSProperties;
}
export declare const RichTextEditor: FC<IRichTextEditorProps>;
export default RichTextEditor;
