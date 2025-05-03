import { IModalProps } from './models';
export declare enum DynamicModalActionEnums {
    Open = "OPEN",
    CreateModal = "CREATE_MODAL",
    RemoveModal = "REMOVE_MODAL"
}
export interface ICreateModalPayload {
    modalProps: IModalProps;
}
export declare const openAction: import("redux-actions").ActionFunction1<IModalProps, import("redux-actions").Action<IModalProps>>;
export declare const createModalAction: import("redux-actions").ActionFunction1<ICreateModalPayload, import("redux-actions").Action<ICreateModalPayload>>;
export declare const removeModalAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
