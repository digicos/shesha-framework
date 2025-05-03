import { ConfigurableFormInstance } from "../../interfaces";
import React, { FC, PropsWithChildren } from "react";
import { IDataContextDescriptor, IRegisterDataContextPayload } from "./models";
import { DataContextType } from "../dataContextProvider/contexts";
export declare const RootContexts: string[];
export interface IDataContextManagerStateContext {
    lastUpdate: string;
    id: string;
    parent?: IDataContextManagerFullInstance;
}
export interface IDataContextsData {
    [key: string]: any;
    lastUpdate: string;
}
export interface IDataContextManagerActionsContext {
    registerDataManager: (payload: IDataContextManagerFullInstance) => void;
    unregisterDataManager: (payload: IDataContextManagerFullInstance) => void;
    registerDataContext: (payload: IRegisterDataContextPayload) => void;
    unregisterDataContext: (payload: IRegisterDataContextPayload) => void;
    getLocalDataContexts: (contextId: string) => IDataContextDescriptor[];
    getDataContexts: (topId?: string) => IDataContextDescriptor[];
    getDataContextsData: (topId?: string, data?: any) => IDataContextsData;
    getDataContext: (contextId: string) => IDataContextDescriptor;
    getNearestDataContext: (topId: string, type: DataContextType) => IDataContextDescriptor;
    getDataContextData: (contextId: string) => any;
    onChangeContext: (dataContext: IDataContextDescriptor) => void;
    onChangeContextData: () => void;
    updatePageFormInstance: (form: ConfigurableFormInstance) => void;
    getPageFormInstance: () => ConfigurableFormInstance;
    getPageContext: () => IDataContextDescriptor;
    getRoot: () => IDataContextManagerFullInstance;
}
export interface IDataContextManagerFullInstance extends IDataContextManagerStateContext, IDataContextManagerActionsContext {
}
/** initial state */
export declare const DATA_CONTEXT_MANAGER_CONTEXT_INITIAL_STATE: IDataContextManagerStateContext;
export declare const DataContextManagerStateContext: React.Context<IDataContextManagerStateContext>;
export declare const DataContextManagerActionsContext: React.Context<IDataContextManagerActionsContext>;
export interface IDataContextManagerProps {
    id: string;
}
declare const useDataContextManagerActions: (require?: boolean) => IDataContextManagerActionsContext;
declare const useDataContextManagerState: (require?: boolean) => IDataContextManagerStateContext;
declare const useDataContextManager: (require?: boolean) => IDataContextManagerFullInstance;
declare const useDataManagerRegister: (payload: IDataContextManagerFullInstance, deps?: ReadonlyArray<any>) => void;
declare const useDataContextRegister: (payload: IRegisterDataContextPayload, deps?: ReadonlyArray<any>) => void;
declare function useNearestDataContext(type: DataContextType): IDataContextDescriptor;
declare const DataContextManager: FC<PropsWithChildren<IDataContextManagerProps>>;
export { DataContextManager, useDataContextManager, useDataManagerRegister, useDataContextRegister, useNearestDataContext, useDataContextManagerActions, useDataContextManagerState };
