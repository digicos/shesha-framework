import React, { FC, PropsWithChildren } from 'react';
import { IFormSections } from '../models';
export interface ConfigurableFormSectionsProviderProps {
    sections?: IFormSections;
}
export declare const ConfigurableFormSectionsContext: React.Context<IFormSections>;
export declare const ConfigurableFormSectionsProvider: FC<PropsWithChildren<ConfigurableFormSectionsProviderProps>>;
export declare const useConfigurableFormSections: (required?: boolean) => IFormSections;
