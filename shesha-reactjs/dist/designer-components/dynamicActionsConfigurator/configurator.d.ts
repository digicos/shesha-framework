import { FC } from 'react';
import { IDynamicActionsConfiguratorComponentProps } from './interfaces';
import { IDynamicActionsConfiguration } from './models';
export interface IDynamicActionsConfiguratorProps {
    value?: IDynamicActionsConfiguration;
    onChange?: (newValue: IDynamicActionsConfiguration) => void;
    editorConfig: IDynamicActionsConfiguratorComponentProps;
    readOnly?: boolean;
}
export declare const DynamicActionsConfigurator: FC<IDynamicActionsConfiguratorProps>;
