import { MetadataBuilder } from "./metadataBuilder";
export type MetadataBuilderFactory = (name: string, description?: string) => MetadataBuilder;
export declare const useMetadataBuilderFactory: () => MetadataBuilderFactory;
