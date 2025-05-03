import { FC, PropsWithChildren } from 'react';
import { IDataSourceDictionary, IGetDataSourcePayload, IRegisterDataSourcePayload } from './models';
export interface IDataSourcesProviderProps {
}
declare const DataSourcesProvider: FC<PropsWithChildren<IDataSourcesProviderProps>>;
declare function useDataSources(require?: boolean): {
    registerDataSource: (payload: IRegisterDataSourcePayload) => void;
    getDataSources: () => IDataSourceDictionary;
    unregisterDataSource: (payload: IRegisterDataSourcePayload) => void;
    getDataSource: (payload: IGetDataSourcePayload | string) => import("./models").IDataSourceDescriptor;
};
declare function useDataSource(payload: IRegisterDataSourcePayload, deps?: ReadonlyArray<any>): void;
export { DataSourcesProvider, useDataSources, useDataSource };
