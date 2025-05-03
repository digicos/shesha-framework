import { IInternalCurrentUserApi } from './currentUser/api';
import { ISettingsApi } from './settings/api';
import { HttpClientApi } from './http/api';
import { IEntitiesApi } from './entities/api';
import { IUtilsApi } from './utils/api';
import { IFormsApi } from './forms/api';
import { ICacheProvider, IEntityMetadataFetcher } from '../../../providers/metadataDispatcher/entities/models';
import { INavigatorApi } from './navigator/api';
import { ShaRouting } from '../../../providers/shaRouting/contexts';
export interface IApplicationPlugin {
    name: string;
    data: any;
}
export interface IApplicationApi {
    user: IInternalCurrentUserApi;
    settings: ISettingsApi;
    entities: IEntitiesApi;
    navigator: INavigatorApi;
    addPlugin: (plugin: IApplicationPlugin) => void;
    removePlugin: (pluginName: string) => void;
}
export declare class ApplicationApi implements IApplicationApi {
    #private;
    user: IInternalCurrentUserApi;
    settings: ISettingsApi;
    entities: IEntitiesApi;
    utils: IUtilsApi;
    forms: IFormsApi;
    navigator: INavigatorApi;
    constructor(httpClient: HttpClientApi, cacheProvider: ICacheProvider, metadataFetcher: IEntityMetadataFetcher, shaRouter: ShaRouting);
    addPlugin(plugin: IApplicationPlugin): void;
    removePlugin(pluginName: string): void;
}
