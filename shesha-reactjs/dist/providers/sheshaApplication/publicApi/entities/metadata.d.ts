import { IPropertyMetadata } from "../../../../interfaces/metadata";
import { MetadataBuilder } from "../../../../utils/metadata/metadataBuilder";
import { HttpClientApi } from "../http/api";
type EntityItemType = 'module' | 'entityType';
export interface IEntityPropertyMetadata extends IPropertyMetadata {
    entityItemType: EntityItemType;
}
/**
 * Fetches the entities API as metadata properties using the provided HTTP client.
 *
 * @param {HttpClientApi} httpClient - The HTTP client to use for the API request.
 * @return {Promise<IPropertyMetadata[]>} A promise that resolves to an array of property metadata objects.
 */
export declare const fetchEntitiesApiAsMetadataProperties: (httpClient: HttpClientApi) => Promise<IPropertyMetadata[]>;
/**
 * Returns a MetadataBuilder with properties loader and type definition set based on the provided MetadataBuilder and HttpClientApi.
 *
 * @param {MetadataBuilder} builder - the MetadataBuilder instance
 * @param {HttpClientApi} httpClient - the HttpClientApi instance
 * @return {MetadataBuilder} the MetadataBuilder instance with properties loader and type definition set
 */
export declare const getEntitiesApiProperties: (builder: MetadataBuilder, httpClient: HttpClientApi) => MetadataBuilder;
export {};
