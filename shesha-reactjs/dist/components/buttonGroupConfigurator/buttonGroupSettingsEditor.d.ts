import { FC } from 'react';
import { ButtonGroupItemProps } from '../../providers';
export interface ButtonGroupSettingsEditorProps {
    readOnly: boolean;
    value: ButtonGroupItemProps[];
    onChange: (newValue: ButtonGroupItemProps[]) => void;
}
export declare const ButtonGroupSettingsEditor: FC<ButtonGroupSettingsEditorProps>;
