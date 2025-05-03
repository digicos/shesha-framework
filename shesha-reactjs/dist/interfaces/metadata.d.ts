import { FormFullName } from "../providers";
import { IDictionary } from "./shesha";
export interface IMemberType {
    dataType?: string | null;
    dataFormat?: string | null;
    baseType?: IMemberType;
}
export interface SourceFile {
    fileName: string;
    content: string;
}
export interface TypeDefinition {
    typeName: string;
    files: SourceFile[];
}
export interface TypeAndLocation {
    typeName: string;
    filePath?: string;
    metadata?: IModelMetadata;
}
export interface ITypeDefinitionBuilder {
    getEntityType: (typeId: ModelTypeIdentifier) => Promise<TypeAndLocation>;
    makeFormType: (formId: FormFullName, content: string) => TypeDefinition;
    makeFile: (fileName: string, content: string) => void;
}
export interface ITypeDefinitionLoadingContext {
    typeDefinitionBuilder: ITypeDefinitionBuilder;
}
export type TypeDefinitionLoader = (context: ITypeDefinitionLoadingContext) => Promise<TypeDefinition>;
export interface IHasTypeDefinition {
    typeDefinitionLoader: TypeDefinitionLoader;
}
export interface IMetadata extends Partial<IHasTypeDefinition> {
    dataType: string;
    name?: string;
    description?: string;
}
export interface IMemberMetadata extends IMemberType, Partial<IHasTypeDefinition> {
    path?: string | null;
    label?: string | null;
    description?: string | null;
}
export interface IHasChildPropertiesMetadata {
    properties: IPropertyMetadata[];
}
export interface ModelTypeIdentifier {
    name: string;
    module: string;
}
export interface IHasEntityType {
    entityType: string | null;
    entityModule?: string | null;
    typeAccessor?: string;
    moduleAccessor?: string;
}
export declare const isIHasEntityType: (value: any) => value is IHasEntityType;
export interface IObjectReferencePropertyMetadata extends IMemberMetadata, IHasEntityType, IHasChildPropertiesMetadata {
}
export interface IEntityReferencePropertyMetadata extends IMemberMetadata, IHasEntityType, Partial<IHasChildPropertiesMetadata> {
}
export declare const isEntityReferencePropertyMetadata: (propMeta: IMemberMetadata) => propMeta is IEntityReferencePropertyMetadata;
export declare const isObjectReferencePropertyMetadata: (propMeta: IMemberMetadata) => propMeta is IObjectReferencePropertyMetadata;
export interface IRefListPropertyMetadata extends IMemberMetadata {
    referenceListName?: string | null;
    referenceListModule?: string | null;
}
export declare const isRefListPropertyMetadata: (propMeta: IMemberMetadata) => propMeta is IRefListPropertyMetadata;
export interface IFunctionMetadata extends IMemberMetadata {
    arguments?: IMemberMetadata[];
    resultType: IMemberType;
}
export type PropertiesPromise = Promise<IPropertyMetadata[]>;
export type PropertiesLoader = () => PropertiesPromise;
export type NestedProperties = IPropertyMetadata[] | PropertiesLoader | null;
export interface IPropertyMetadata extends IMemberMetadata {
    required?: boolean;
    readonly?: boolean;
    minLength?: number | null;
    maxLength?: number | null;
    min?: number | null;
    max?: number | null;
    validationMessage?: string | null;
    referenceListName?: string | null;
    referenceListModule?: string | null;
    /**
     * Child properties, applicable for complex data types (e.g. object, array)
     */
    properties?: NestedProperties;
    functions?: IFunctionMetadata[] | null;
    /**
     * If true, indicates that current property is a framework-related (e.g. Abp.Domain.Entities.ISoftDelete.IsDeleted, Abp.Domain.Entities.Auditing.IHasModificationTime.LastModificationTime)
     */
    isFrameworkRelated?: boolean;
    /**
     * If true, indicates that current property is nullable
     */
    isNullable?: boolean;
    prefix?: string;
    isVisible?: boolean;
    itemsType?: IPropertyMetadata;
}
export declare const isPropertiesArray: (value: NestedProperties) => value is IPropertyMetadata[];
export declare const isPropertiesLoader: (value: NestedProperties) => value is PropertiesLoader;
export declare const asPropertiesArray: (value: NestedProperties, fallback: IPropertyMetadata[] | undefined) => IPropertyMetadata[] | undefined;
export declare const isFunctionMetadata: (value: IMemberMetadata) => value is IFunctionMetadata;
export declare const isDataPropertyMetadata: (value: IMemberMetadata) => value is IPropertyMetadata;
export type ProperyDataType = 'string' | 'date' | 'date-time' | 'time' | 'entity' | 'file' | 'number' | 'reference-list-item' | 'boolean' | 'array' | 'object' | 'object-reference' | 'guid';
export declare enum MetadataSourceType {
    ApplicationCode = 1,
    UserDefined = 2
}
export declare enum EntityConfigType {
    Class = 1,
    Interface = 2
}
export declare enum StandardEntityActions {
    create = "create",
    read = "read",
    update = "update",
    delete = "delete"
}
export interface IContainerWithNestedProperties {
    properties: NestedProperties;
}
export interface IEntityMetadata extends IMetadata, IContainerWithNestedProperties, IHasEntityType {
    md5?: string;
    changeTime?: Date;
    aliases?: string[];
    specifications: ISpecification[];
    apiEndpoints: IDictionary<IApiEndpoint>;
}
export interface IObjectMetadata extends IMetadata, IContainerWithNestedProperties {
}
export interface IContextMetadata extends IMetadata, IContainerWithNestedProperties {
}
export type IModelMetadata = IEntityMetadata | IObjectMetadata | IContextMetadata;
export declare const isEntityMetadata: (value: IModelMetadata) => value is IEntityMetadata;
export declare const isObjectMetadata: (value: IModelMetadata) => value is IObjectMetadata;
export declare const isContextMetadata: (value: IModelMetadata) => value is IContextMetadata;
export declare const metadataHasNestedProperties: (value: IModelMetadata) => value is IContainerWithNestedProperties & IModelMetadata;
export interface IApiEndpoint {
    /**
     * Http verb (get/post/put etc)
     */
    httpVerb: string;
    /**
     * Url
     */
    url: string;
}
export interface ISpecification {
    name: string;
    friendlyName: string;
    description?: string;
}
