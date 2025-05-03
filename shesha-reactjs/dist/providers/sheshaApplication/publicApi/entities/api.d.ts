import { ICacheProvider } from "../../../../providers/metadataDispatcher/entities/models";
import { HttpClientApi } from "../http/api";
import { EntitiesManager } from "./manager";
import { IEntitiesModuleAccessor } from "./moduleAccessor";
import { IEntityMetadataFetcher } from "../../../../providers/metadataDispatcher/entities/models";
export interface IEntitiesApi {
}
/**
 * Entities API. Provides settings to the entities groupped by modules.
 */
export declare class EntitiesApi implements IEntitiesApi {
    readonly _modules: Map<string, IEntitiesModuleAccessor>;
    readonly _manager: EntitiesManager;
    getModuleEntities(name: string): IEntitiesModuleAccessor;
    constructor(httpClient: HttpClientApi, cacheProvider: ICacheProvider, metadataFetcher: IEntityMetadataFetcher);
}
