import { FormMarkupWithSettings, IFlatComponentsStructure } from '../form/models';
import { IFetchDataErrorPayload, IFetchDataSuccessPayload, IPersistedFormPayload } from './contexts';
export declare enum SubFormActionEnums {
    SetMarkupWithSettings = "SET_MARKUP_WITH_SETTINGS",
    FetchDataRequest = "FETCH_DATA_REQUEST",
    FetchDataSuccess = "FETCH_DATA_SUCCESS",
    FetchDataError = "FETCH_DATA_ERROR"
}
export interface IPersistedFormPropsWithComponents extends FormMarkupWithSettings, IPersistedFormPayload {
    hasFetchedConfig?: boolean;
}
interface ISubformMarkupAndSettings extends IPersistedFormPropsWithComponents, IFlatComponentsStructure {
}
export declare const setMarkupWithSettingsAction: import("redux-actions").ActionFunction1<ISubformMarkupAndSettings, import("redux-actions").Action<ISubformMarkupAndSettings>>;
export declare const fetchDataRequestAction: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
export declare const fetchDataSuccessAction: import("redux-actions").ActionFunction1<IFetchDataSuccessPayload, import("redux-actions").Action<IFetchDataSuccessPayload>>;
export declare const fetchDataErrorAction: import("redux-actions").ActionFunction1<IFetchDataErrorPayload, import("redux-actions").Action<IFetchDataErrorPayload>>;
export {};
