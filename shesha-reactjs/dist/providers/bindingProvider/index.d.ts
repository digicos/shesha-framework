import React, { ComponentType, FC, PropsWithChildren } from "react";
export interface IBindingProviderStateContext {
    value?: any;
    onChange?: (...args: any[]) => void;
}
export declare const BindingProviderStateContext: React.Context<IBindingProviderStateContext>;
export interface IBindingProviderProps {
    valuePropName?: string;
    value?: any;
    onChange?: (...args: any[]) => void;
}
declare const BindingProvider: FC<PropsWithChildren<IBindingProviderProps>>;
declare function useBinding(require?: boolean): IBindingProviderStateContext;
declare const withBinding: <P extends object>(Component: ComponentType<P>) => FC<P>;
export { BindingProvider, useBinding, withBinding };
