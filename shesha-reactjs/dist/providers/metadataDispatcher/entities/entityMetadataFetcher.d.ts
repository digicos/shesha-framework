import { HttpClientApi } from "../../../providers/sheshaApplication/publicApi";
import { IEntityMetadataFetcher, ICacheProvider } from "./models";
import { IEntityMetadata } from "../../../interfaces/metadata";
import { IEntityTypeIndentifier } from "../../../providers/sheshaApplication/publicApi/entities/models";
export declare class EntityMetadataFetcher implements IEntityMetadataFetcher {
    #private;
    constructor(httpClient: HttpClientApi, cacheProvider: ICacheProvider);
    syncAll: () => Promise<void>;
    getByClassName: (className: string) => Promise<IEntityMetadata>;
    getByTypeId: (typeId: IEntityTypeIndentifier) => Promise<IEntityMetadata>;
    isEntity: (className: string) => Promise<boolean>;
}
