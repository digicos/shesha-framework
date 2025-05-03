import { IModelMetadata } from "../../index";
export interface IDataContextFullInstance extends IDataContextProviderStateContext, IDataContextProviderActionsContext {
}
export interface IDataContextProviderStateContext {
    id: string;
    name: string;
    description?: string;
    type: string;
    parentDataContext?: IDataContextFullInstance | null;
    metadata?: Promise<IModelMetadata>;
}
export interface IDataContextFull {
    data: any;
    api: any;
    metadata: Promise<IModelMetadata>;
    setFieldValue: ContextSetFieldValue;
}
export interface IDataContextProviderActionsContext {
    setFieldValue: ContextSetFieldValue;
    getFieldValue: ContextGetFieldValue;
    setData: ContextSetData;
    getData: ContextGetData;
    getFull: ContextGetFull;
    updateApi: (api: object) => any;
    getApi: () => any;
}
export interface IDataContextProviderActionsContextOverride extends Partial<IDataContextProviderActionsContext> {
}
/** initial state */
export declare const DATA_CONTEXT_PROVIDER_CONTEXT_INITIAL_STATE: IDataContextProviderStateContext;
export declare const DataContextProviderStateContext: import("react").Context<IDataContextProviderStateContext>;
export declare const DataContextProviderActionsContext: import("react").Context<IDataContextProviderActionsContext>;
export type DataContextType = 'root' | 'page' | 'form' | 'control' | 'settings';
export type ContextGetFieldValue = (name: string) => any;
export type ContextGetFull = () => IDataContextFull;
export type ContextGetData = () => any;
export type ContextSetFieldValue = <T>(name: string, value: T, refreshContext?: RefreshContext) => void;
export type ContextSetData = (changedData: any, refreshContext?: RefreshContext) => void;
export type ContextOnChangeData = <T>(data: T, changedData: any, refreshContext?: RefreshContext) => void;
export type RefreshContext = () => void;
export declare function useDataContext(require?: boolean): IDataContextFullInstance;
