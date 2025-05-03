import { IComponentLoadErrorPayload, IComponentLoadPayload, IComponentLoadSuccessPayload, IComponentSaveErrorPayload, IComponentSavePayload, IComponentSaveSuccessPayload } from './contexts';
export declare enum ConfigurableComponentActionEnums {
    SaveRequest = "SAVE_REQUEST",
    SaveSuccess = "SAVE_SUCCESS",
    SaveError = "SAVE_ERROR",
    LoadRequest = "LOAD_REQUEST",
    LoadSuccess = "LOAD_SUCCESS",
    LoadError = "LOAD_ERROR"
}
export declare const loadRequestAction: import("redux-actions").ActionFunction1<IComponentLoadPayload, import("redux-actions").Action<IComponentLoadPayload>>;
export declare const loadSuccessAction: import("redux-actions").ActionFunction1<IComponentLoadSuccessPayload<any>, import("redux-actions").Action<IComponentLoadSuccessPayload<any>>>;
export declare const loadErrorAction: import("redux-actions").ActionFunction1<IComponentLoadErrorPayload, import("redux-actions").Action<IComponentLoadErrorPayload>>;
export declare const saveRequestAction: import("redux-actions").ActionFunction1<IComponentSavePayload, import("redux-actions").Action<IComponentSavePayload>>;
export declare const saveSuccessAction: import("redux-actions").ActionFunction1<IComponentSaveSuccessPayload, import("redux-actions").Action<IComponentSaveSuccessPayload>>;
export declare const saveErrorAction: import("redux-actions").ActionFunction1<IComponentSaveErrorPayload, import("redux-actions").Action<IComponentSaveErrorPayload>>;
