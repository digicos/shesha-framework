import React from 'react';
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
export interface IConfigurableComponentProps<TSettings = any> {
    canConfigure?: boolean;
    children: ConfigurableComponentChildrenFn<TSettings>;
    onStartEdit?: () => void;
}
export interface IBlockOverlayProps {
    visible: boolean;
    onClick?: () => void;
}
export declare const ConfigurableComponent: <TSettings extends unknown>({ children, canConfigure, onStartEdit, }: IConfigurableComponentProps<TSettings>) => React.JSX.Element;
export default ConfigurableComponent;
