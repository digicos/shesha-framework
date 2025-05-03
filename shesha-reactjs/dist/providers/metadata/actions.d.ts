import { ISetMetadataPayload } from './contexts';
export declare enum MetadataActionEnums {
    SetMetadata = "SET_METADATA"
}
export declare const setMetadataAction: import("redux-actions").ActionFunction1<ISetMetadataPayload, import("redux-actions").Action<ISetMetadataPayload>>;
