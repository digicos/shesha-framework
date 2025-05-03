import React from 'react';
import { IConfigurableComponentContext } from '../../providers/configurableComponent/contexts';
import { ISettingsEditor } from '../../components/configurableComponent';
export interface IComponentStateProps<TSettings = any> {
    isSelected: boolean;
    isEditMode: boolean;
    wrapperClassName: string;
    settings: TSettings;
}
export interface IOverlayProps {
    children?: React.ReactElement;
}
export type ConfigurableComponentChildrenFn<TSettings = any> = (componentState: IComponentStateProps<TSettings>, BlockOverlay: (props: IOverlayProps) => React.ReactElement) => React.ReactNode | null;
export interface IConfigurableComponentRendererProps<TSettings = any> {
    canConfigure?: boolean;
    children: ConfigurableComponentChildrenFn<TSettings>;
    onStartEdit?: () => void;
    contextAccessor: () => IConfigurableComponentContext<TSettings>;
    settingsEditor?: ISettingsEditor<TSettings>;
}
export interface IBlockOverlayProps {
    visible: boolean;
    onClick?: () => void;
}
export declare const ConfigurableComponentRenderer: <TSettings extends unknown>({ children, canConfigure, onStartEdit, contextAccessor, settingsEditor, }: IConfigurableComponentRendererProps<TSettings>) => React.JSX.Element;
export default ConfigurableComponentRenderer;
