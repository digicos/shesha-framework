import { FormFullName } from "../../interfaces";
import { ITypeDefinitionBuilder, ModelTypeIdentifier, NestedProperties, TypeAndLocation, TypeDefinition } from "../../interfaces/metadata";
import { MetadataFetcher } from "./metadataBuilder";
export interface BuildResult {
    content: string;
}
export interface BuildContext {
    requestedFiles: string[];
}
/**
 * Type definition builder
 */
export declare class TypesBuilder implements ITypeDefinitionBuilder {
    #private;
    readonly isFileExists: (fileName: string) => boolean;
    readonly registerFile: (fileName: string, content: string) => void;
    readonly metadataFetcher: MetadataFetcher;
    readonly requestedEntities: Set<string>;
    constructor(metadataFetcher: MetadataFetcher, isFileExists: (fileName: string) => boolean, registerFile: (fileName: string, content: string) => void);
    getEntityTypeName: (entityType: string) => string;
    makeFormType: (formId: FormFullName, content: string) => TypeDefinition;
    makeFile: (fileName: string, content: string) => void;
    getEntityType: (typeId: ModelTypeIdentifier) => Promise<TypeAndLocation>;
    /**
     * Build type definition for specified list of properties
     */
    build(properties: NestedProperties): Promise<BuildResult>;
}
