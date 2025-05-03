import { IErrorInfo } from '../../interfaces/errorInfo';
import { CrudMode } from './models';
export declare enum CrudActionEnums {
    SwitchMode = "SWITCH_MODE",
    SetAllowEdit = "SET_ALLOW_EDIT",
    SetAllowDelete = "SET_ALLOW_DELETE",
    ResetErrors = "RESET_ERRORS",
    SetInitialValuesLoading = "SET_INITIAL_VALUES_LOADING",
    SetInitialValues = "SET_INITIAL_VALUES",
    SetAutoSave = "SET_AUTO_SAVE",
    SaveStarted = "SAVE_STARTED",
    SaveFailed = "SAVE_FAILED",
    SaveSuccess = "SAVE_SUCCESS",
    DeleteStarted = "DELETE_STARTED",
    DeleteFailed = "DELETE_FAILED",
    DeleteSuccess = "DELETE_SUCCESS"
}
export interface ISwitchModeActionPayload {
    mode: CrudMode;
    allowChangeMode: boolean;
}
export declare const switchModeAction: import("redux-actions").ActionFunction1<ISwitchModeActionPayload, import("redux-actions").Action<ISwitchModeActionPayload>>;
export declare const setAutoSaveAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const setInitialValuesLoadingAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const setInitialValuesAction: import("redux-actions").ActionFunction1<object, import("redux-actions").Action<object>>;
export declare const setAllowEditAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const setAllowDeleteAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const resetErrorsAction: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
export declare const saveStartedAction: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
export declare const saveFailedAction: import("redux-actions").ActionFunction1<IErrorInfo, import("redux-actions").Action<IErrorInfo>>;
export declare const saveSuccessAction: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
export declare const deleteStartedAction: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
export declare const deleteFailedAction: import("redux-actions").ActionFunction1<IErrorInfo, import("redux-actions").Action<IErrorInfo>>;
export declare const deleteSuccessAction: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
