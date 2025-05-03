import { FC } from 'react';
export interface IFormSettingsEditorProps {
    isVisible: boolean;
    close: () => void;
    readOnly: boolean;
}
export declare const FormSettingsEditor: FC<IFormSettingsEditorProps>;
