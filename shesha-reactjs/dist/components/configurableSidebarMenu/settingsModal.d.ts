import { FC } from 'react';
import { ISettingsEditorProps } from '../../components/configurableComponent';
import { ISideBarMenuProps } from '.';
export interface IProps extends ISettingsEditorProps<ISideBarMenuProps> {
    title?: string;
}
export declare const ComponentSettingsModal: FC<IProps>;
