import React, { FC } from 'react';
import { ICollapsiblePanelProps } from '../../components';
interface ISettingsCollapsiblePanelProps extends ICollapsiblePanelProps {
}
export interface ISettingsCollapsiblePanelActionsContext {
    registerField: (name: string) => void;
}
export declare const SettingsCollapsiblePanelActionsContext: React.Context<ISettingsCollapsiblePanelActionsContext>;
declare const SettingsCollapsiblePanel: FC<ISettingsCollapsiblePanelProps>;
export declare function useSettingsPanel(required: Boolean): ISettingsCollapsiblePanelActionsContext;
export default SettingsCollapsiblePanel;
