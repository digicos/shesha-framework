import React, { PropsWithChildren } from 'react';
import { ISettingsFormFactoryArgs } from "../../interfaces";
interface SettingsFormState<TModel> {
    model?: TModel;
    values?: TModel;
}
interface ISettingsFormActions {
    propertyFilter: (name: string) => boolean;
    onValuesChange?: (changedValues: any) => void;
}
/** initial state */
export declare const DATA_SOURCES_PROVIDER_CONTEXT_INITIAL_STATE: SettingsFormState<any>;
export declare const SettingsFormStateContext: React.Context<SettingsFormState<any>>;
export declare const SettingsFormActionsContext: React.Context<ISettingsFormActions>;
export interface SettingsFormProps<TModel> extends ISettingsFormFactoryArgs<TModel> {
}
declare const SettingsForm: <TModel>(props: PropsWithChildren<SettingsFormProps<TModel>>) => React.JSX.Element;
export declare function useSettingsForm<TModel>(require?: boolean): {
    model?: TModel;
    values?: TModel;
    propertyFilter: (name: string) => boolean;
    onValuesChange?: (changedValues: any) => void;
};
export default SettingsForm;
