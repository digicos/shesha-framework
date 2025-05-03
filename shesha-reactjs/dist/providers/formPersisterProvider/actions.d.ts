import { IErrorInfo } from '../../interfaces/errorInfo';
import { IFlatComponentsStructure, IFormSettings } from '../form/models';
import { ILoadRequestPayload } from './contexts';
import { UpToDateForm } from '../formManager/interfaces';
export declare enum FormPersisterActionEnums {
    SaveRequest = "SAVE_REQUEST",
    SaveSuccess = "SAVE_SUCCESS",
    SaveError = "SAVE_ERROR",
    LoadRequest = "LOAD_REQUEST",
    LoadSuccess = "LOAD_SUCCESS",
    LoadError = "LOAD_ERROR",
    ChangeMarkup = "CHANGE_MARKUP",
    UpdateFormSettings = "UPDATE_FORM_SETTINGS"
}
export declare const loadRequestAction: import("redux-actions").ActionFunction1<ILoadRequestPayload, import("redux-actions").Action<ILoadRequestPayload>>;
export declare const loadSuccessAction: import("redux-actions").ActionFunction1<UpToDateForm, import("redux-actions").Action<UpToDateForm>>;
export declare const loadErrorAction: import("redux-actions").ActionFunction1<IErrorInfo, import("redux-actions").Action<IErrorInfo>>;
export declare const changeMarkupAction: import("redux-actions").ActionFunction1<IFlatComponentsStructure, import("redux-actions").Action<IFlatComponentsStructure>>;
export declare const saveRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<{}>>;
export declare const saveSuccessAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<{}>>;
export declare const saveErrorAction: import("redux-actions").ActionFunction1<IErrorInfo, import("redux-actions").Action<IErrorInfo>>;
export declare const updateFormSettingsAction: import("redux-actions").ActionFunction1<IFormSettings, import("redux-actions").Action<IFormSettings>>;
