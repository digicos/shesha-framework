import React, { FC, PropsWithChildren } from 'react';
import { IConfigurableFormComponent, IFlatComponentsStructure } from '../models';
export interface IFormFlatMarkupProviderProps {
    markup: IFlatComponentsStructure;
}
export declare const FormFlatMarkupContext: React.Context<IFlatComponentsStructure>;
export declare const FormFlatMarkupProvider: FC<PropsWithChildren<IFormFlatMarkupProviderProps>>;
export declare const useFormMarkup: (require?: boolean) => IFlatComponentsStructure;
/** Returns component model by component id  */
export declare const useComponentModel: (id: string) => IConfigurableFormComponent;
export declare const useChildComponents: (containerId: string) => IConfigurableFormComponent[];
export declare const useChildComponentIds: (containerId: string) => string[];
