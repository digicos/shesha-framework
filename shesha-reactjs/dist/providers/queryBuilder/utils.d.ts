import { IPropertyMetadata } from "../../interfaces/metadata";
import { IProperty } from "./models";
/**
 * Convert property metadata to QueryBuilder property
 *
 * @param property property metadata
 * @returns
 */
export declare const propertyMetadata2QbProperty: (property: IPropertyMetadata) => IProperty;
export declare const getPropertyFullPath: (path: string, prefix: string) => string;
export declare const useMetadataFields: () => IProperty[];
