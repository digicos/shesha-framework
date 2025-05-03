import { FC, PropsWithChildren } from 'react';
import { ISettingsEditorContext } from './contexts';
export interface ISettingsEditorProviderProps {
}
declare const SettingsEditorProvider: FC<PropsWithChildren<ISettingsEditorProviderProps>>;
declare function useSettingsEditor(require?: boolean): ISettingsEditorContext;
export { SettingsEditorProvider, useSettingsEditor };
