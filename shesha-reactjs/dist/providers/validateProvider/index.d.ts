import React, { FC, PropsWithChildren } from "react";
export interface IValidator {
    id: string;
    validate: () => Promise<void>;
}
export interface IValidateProviderStateContext {
    id: string;
    registerChild: (input: IValidateProviderStateContext) => void;
    unRegisterChild: (input: IValidateProviderStateContext) => void;
    registerValidator: (input: IValidator) => void;
    validate: () => Promise<void>;
}
export interface IValidateProviderProps {
}
export declare const ValidateProviderStateContext: React.Context<IValidateProviderStateContext>;
export declare function useValidator(require?: boolean): IValidateProviderStateContext;
declare const ValidateProvider: FC<PropsWithChildren<IValidateProviderProps>>;
export default ValidateProvider;
