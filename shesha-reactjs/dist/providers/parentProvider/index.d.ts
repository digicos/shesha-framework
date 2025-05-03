import React, { FC, PropsWithChildren } from "react";
import { FormMode, IConfigurableFormComponent, IFlatComponentsStructure } from "../index";
export interface IParentProviderStateContext {
    id: string;
    formMode?: FormMode;
    subFormIdPrefix?: string;
    context?: string;
    model: any;
    formFlatMarkup?: IFlatComponentsStructure;
    getChildComponents: (componentId: string) => IConfigurableFormComponent[];
    registerChild: (input: IParentProviderStateContext) => void;
    unRegisterChild: (input: IParentProviderStateContext) => void;
}
export interface IParentProviderProps {
    formMode?: FormMode;
    context?: string;
    model: any;
    formFlatMarkup?: IFlatComponentsStructure;
    isScope?: boolean;
}
export declare const ParentProviderStateContext: React.Context<IParentProviderStateContext>;
export declare function useParent(require?: boolean): IParentProviderStateContext;
declare const ParentProvider: FC<PropsWithChildren<IParentProviderProps>>;
export default ParentProvider;
