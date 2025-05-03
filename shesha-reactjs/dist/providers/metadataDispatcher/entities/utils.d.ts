import { IEntityMetadata } from "../../../interfaces";
import { IEntityTypeIndentifier } from "../../sheshaApplication/publicApi/entities/models";
import { ISyncEntitiesContext } from "./models";
export declare const getEntityMetadataCacheKey: (id: IEntityTypeIndentifier) => string;
export declare const syncEntities: (context: ISyncEntitiesContext) => Promise<void>;
export declare const getEntityMetadata: (accessor: IEntityTypeIndentifier, context: ISyncEntitiesContext) => Promise<IEntityMetadata>;
export declare const getCachedMetadataByTypeId: (typeId: IEntityTypeIndentifier, context: ISyncEntitiesContext) => Promise<IEntityMetadata>;
export declare const getCachedMetadataByClassName: (className: string, context: ISyncEntitiesContext) => Promise<IEntityMetadata>;
