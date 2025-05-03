import { IDictionary, IModelMetadata, IPropertyMetadata } from "../../interfaces";
import { IGetMetadataPayload, IGetNestedPropertiesPayload, IGetPropertiesMetadataPayload, IGetPropertyMetadataPayload, IMetadataDispatcher } from "./contexts";
import { IEntityMetadataFetcher } from "./entities/models";
import { HttpClientApi } from "../sheshaApplication/publicApi";
export declare class MetadataDispatcher implements IMetadataDispatcher {
    #private;
    constructor(entityMetaFetcher: IEntityMetadataFetcher, httpClient: HttpClientApi);
    getMetadata: (payload: IGetMetadataPayload) => Promise<IModelMetadata>;
    getPropertyMetadata: (payload: IGetPropertyMetadataPayload) => Promise<IPropertyMetadata>;
    getPropertiesMetadata: (payload: IGetPropertiesMetadataPayload) => Promise<IDictionary<IPropertyMetadata>>;
    isEntityType: (modelType: string) => Promise<boolean>;
    getContainerProperties: (payload: IGetNestedPropertiesPayload) => Promise<IPropertyMetadata[]>;
    getContainerMetadata: (payload: IGetNestedPropertiesPayload) => Promise<IModelMetadata>;
    registerModel: (modelType: string, model: Promise<IModelMetadata>) => void;
    updateModel: (modelType: string, model: Promise<IModelMetadata>) => void;
}
