import { IPropertyMetadata } from "../../../../interfaces/metadata";
import { MetadataBuilder } from "../../../../utils/metadata/metadataBuilder";
import { HttpClientApi } from "../http/api";
type SettingItemType = 'module' | 'category' | 'setting';
export interface ISettingPropertyMetadata extends IPropertyMetadata {
    settingItemType: SettingItemType;
}
/**
 * Fetches settings API as metadata properties.
 *
 * @param {HttpClientApi} httpClient - The HttpClientApi used to make the API request.
 * @return {Promise<IPropertyMetadata[]>} a promise of an array of property metadata
 */
export declare const fetchSettingsApiAsMetadataProperties: (httpClient: HttpClientApi) => Promise<IPropertyMetadata[]>;
/**
 * Returns a MetadataBuilder with properties loader and type definition set.
 *
 * @param {MetadataBuilder} builder - The MetadataBuilder used to build the settings API properties.
 * @param {HttpClientApi} httpClient - The HttpClientApi used to make the API request.
 * @return {MetadataBuilder} The MetadataBuilder with the settings API properties set.
 */
export declare const getSettingsApiProperties: (builder: MetadataBuilder, httpClient: HttpClientApi) => MetadataBuilder;
export {};
