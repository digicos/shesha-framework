import { ModelConfigurationDto } from '../../apis/modelConfigurations';
import { IErrorInfo } from '../../interfaces/errorInfo';
export declare enum ModelActionEnums {
    CreateNew = "CREATE_NEW",
    ChangeModelId = "CHANGE_MODEL",
    LoadRequest = "LOAD_REQUEST",
    LoadSuccess = "LOAD_SUCCESS",
    LoadError = "LOAD_ERROR",
    SaveRequest = "SAVE_REQUEST",
    SaveSuccess = "SAVE_SUCCESS",
    SaveError = "SAVE_ERROR",
    DeleteRequest = "DELETE_REQUEST",
    DeleteSuccess = "DELETE_SUCCESS",
    DeleteError = "DELETE_ERROR",
    SetModelSettings = "SET_MODEL_SETTINGS"
}
export declare const createNewAction: import("redux-actions").ActionFunction1<ModelConfigurationDto, import("redux-actions").Action<ModelConfigurationDto>>;
export declare const changeModelIdAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const loadRequestAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const loadSuccessAction: import("redux-actions").ActionFunction1<ModelConfigurationDto, import("redux-actions").Action<ModelConfigurationDto>>;
export declare const loadErrorAction: import("redux-actions").ActionFunction1<IErrorInfo, import("redux-actions").Action<IErrorInfo>>;
export declare const saveRequestAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const saveSuccessAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const saveErrorAction: import("redux-actions").ActionFunction1<IErrorInfo, import("redux-actions").Action<IErrorInfo>>;
export declare const deleteRequestAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const deleteSuccessAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const deleteErrorAction: import("redux-actions").ActionFunction1<IErrorInfo, import("redux-actions").Action<IErrorInfo>>;
