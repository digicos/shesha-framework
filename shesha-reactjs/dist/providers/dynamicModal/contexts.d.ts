import { ICommonModalProps, IModalInstance } from './models';
export interface IDynamicModalStateContext {
    instances: {
        [index: string]: IModalInstance;
    };
}
export interface IDynamicModalActionsContext {
    open: (modalProps: ICommonModalProps) => void;
    modalExists: (id: string) => boolean;
    createModal: (modalProps: ICommonModalProps) => void;
    removeModal: (id: string) => void;
}
export declare const DYNAMIC_MODAL_CONTEXT_INITIAL_STATE: IDynamicModalStateContext;
export declare const DynamicModalStateContext: import("react").Context<IDynamicModalStateContext>;
export declare const DynamicModalActionsContext: import("react").Context<IDynamicModalActionsContext>;
export interface IDynamicModalInstanceContext {
    instance?: IModalInstance;
    close: () => void;
}
export declare const DYNAMIC_MODAL_INSTANCE_CONTEXT_INITIAL_STATE: IDynamicModalInstanceContext;
export declare const DynamicModalInstanceContext: import("react").Context<IDynamicModalInstanceContext>;
