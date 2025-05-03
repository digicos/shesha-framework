import { IDataSourceDescriptor, IDataSourceDictionary, IGetDataSourcePayload, IRegisterDataSourcePayload } from './models';
export interface IDataSourcesProviderStateContext {
}
export interface IDataSourcesProviderActionsContext {
    registerDataSource: (payload: IRegisterDataSourcePayload) => void;
    getDataSources: () => IDataSourceDictionary;
    unregisterDataSource: (payload: IRegisterDataSourcePayload) => void;
    getDataSource: (payload: IGetDataSourcePayload | string) => IDataSourceDescriptor;
}
/** initial state */
export declare const DATA_SOURCES_PROVIDER_CONTEXT_INITIAL_STATE: IDataSourcesProviderStateContext;
export declare const DataSourcesProviderStateContext: import("react").Context<IDataSourcesProviderStateContext>;
export declare const DataSourcesProviderActionsContext: import("react").Context<IDataSourcesProviderActionsContext>;
