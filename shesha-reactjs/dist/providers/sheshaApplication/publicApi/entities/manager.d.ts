import { HttpClientApi } from "../http/api";
import { EntityConfigurationDto, IEntity, IEntityTypeIndentifier } from "./models";
import { ICacheProvider } from "../../../../providers/metadataDispatcher/entities/models";
import { IEntityMetadataFetcher } from "../../../../providers/metadataDispatcher/entities/models";
import { IEntityEndpoints } from "./entityTypeAccessor";
export declare const ENTITIES_URLS: {
    GET_CONFIGURATIONS: string;
};
export declare class EntitiesManager {
    #private;
    readonly _httpClient: HttpClientApi;
    readonly _cacheProvider: ICacheProvider;
    readonly _metadataFetcher: IEntityMetadataFetcher;
    getApiEndpointsAsync: (typeAccessor: IEntityTypeIndentifier) => Promise<IEntityEndpoints>;
    createEntityAsync: <TId, TEntity extends IEntity<TId>>(typeAccessor: IEntityTypeIndentifier, value: TEntity) => Promise<TEntity>;
    getEntityAsync: <TId, TEntity extends IEntity<TId>>(typeAccessor: IEntityTypeIndentifier, id: TId) => Promise<TEntity>;
    updateEntityAsync: <TId, TEntity extends IEntity<TId>>(typeAccessor: IEntityTypeIndentifier, value: TEntity) => Promise<TEntity>;
    deleteEntityAsync: <TId>(typeAccessor: IEntityTypeIndentifier, id: TId) => Promise<void>;
    constructor(httpClient: HttpClientApi, cacheProvider: ICacheProvider, metadataFetcher: IEntityMetadataFetcher);
    static fetchConfigurationsAsync: (httpClient: HttpClientApi) => Promise<EntityConfigurationDto[]>;
}
