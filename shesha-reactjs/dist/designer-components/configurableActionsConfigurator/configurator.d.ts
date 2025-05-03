import React, { FC } from 'react';
import { IConfigurableActionConfiguration } from '../../interfaces/configurableAction';
import { IConfigurableActionConfiguratorComponentProps } from './interfaces';
import { ICodeExposedVariable } from '../../components/codeVariablesTable';
export declare const ConfigurableActionConfigurator: FC<IConfigurableActionConfiguratorProps>;
interface IConfigurableActionConfiguratorProps {
    label?: React.ReactNode;
    description?: string;
    editorConfig: IConfigurableActionConfiguratorComponentProps;
    value?: IConfigurableActionConfiguration;
    onChange?: (value: IConfigurableActionConfiguration) => void;
    level: number;
    readOnly?: boolean;
    exposedVariables?: ICodeExposedVariable[];
    allowedActions?: string[];
}
export {};
