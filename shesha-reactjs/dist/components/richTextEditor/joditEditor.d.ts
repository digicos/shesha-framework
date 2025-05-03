import { FC } from 'react';
export interface IJoditEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    config?: any;
}
export declare const JoditEditorWrapper: FC<IJoditEditorProps>;
export default JoditEditorWrapper;
