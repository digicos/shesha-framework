import { IModelMetadata } from "../../interfaces/metadata";
import { DataContextType, IDataContextProviderActionsContext } from "../dataContextProvider/contexts";
export interface IDataContextDescriptor extends IDataContextProviderActionsContext {
    id: string;
    name: string;
    description?: string;
    type: DataContextType;
    parentId?: string;
    metadata?: IModelMetadata;
}
export interface IDataContextDictionary {
    [key: string]: IDataContextDescriptor;
}
export interface IRegisterDataContextPayload extends IDataContextDescriptor {
    initialData?: any;
}
export declare const SHESHA_ROOT_DATA_CONTEXT_MANAGER = "SHESHA_ROOT_DATA_CONTEXT_MANAGER";
export declare enum SheshaCommonContexts {
    ApplicationContext = "application",
    AppContext = "appContext"
}
export declare const DEFAULT_CONTEXT_METADATA: IModelMetadata;
