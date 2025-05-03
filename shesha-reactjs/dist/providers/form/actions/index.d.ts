import React, { FC, PropsWithChildren } from 'react';
import { IFormActions } from '../models';
export interface ConfigurableFormActionsProviderProps {
    actions?: IFormActions;
}
export declare const ConfigurableFormActionsContext: React.Context<IFormActions>;
export declare const ConfigurableFormActionsProvider: FC<PropsWithChildren<ConfigurableFormActionsProviderProps>>;
export declare const useConfigurableFormActions: (required?: boolean) => IFormActions;
