import { FormLoadingItem, UpToDateForm } from "./interfaces";
import { FormIdentifier, FormRawMarkup, IFormSettings } from "../form/models";
import { ConfigurationItemsViewMode } from "../appConfigurator/models";
export interface IFormManagerStateContext {
}
export type GetFormByMarkupPayload = {
    key: string;
    markup: FormRawMarkup;
    formSettings: IFormSettings;
    isSettingsForm?: boolean;
};
export type GetFormByIdPayload = {
    formId: FormIdentifier;
    configurationItemMode?: ConfigurationItemsViewMode;
    skipCache: boolean;
};
export interface IFormManagerActionsContext {
    getFormById: (payload: GetFormByIdPayload) => Promise<UpToDateForm>;
    getFormByIdLoader: (payload: GetFormByIdPayload) => FormLoadingItem;
    getFormByMarkup: (payload: GetFormByMarkupPayload) => Promise<UpToDateForm>;
    getFormByMarkupLoader: (payload: GetFormByMarkupPayload) => FormLoadingItem;
}
export declare const FormManagerStateContext: import("react").Context<IFormManagerStateContext>;
export declare const FormManagerActionsContext: import("react").Context<IFormManagerActionsContext>;
