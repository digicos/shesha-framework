import { GetFormByIdPayload, GetFormByMarkupPayload } from "./contexts";
import { FormLoadingState, UpToDateForm } from "./interfaces";
export interface GetFormByMarkupResponse {
    state: FormLoadingState;
    form?: UpToDateForm;
    error?: any;
    promise: Promise<UpToDateForm>;
}
export declare const useFormByMarkup: (props: GetFormByMarkupPayload) => GetFormByMarkupResponse;
export interface GetFormByIdResponse {
    state: FormLoadingState;
    form?: UpToDateForm;
    error?: any;
    promise: Promise<UpToDateForm>;
}
export declare const useFormById: (props: GetFormByIdPayload) => GetFormByIdResponse;
