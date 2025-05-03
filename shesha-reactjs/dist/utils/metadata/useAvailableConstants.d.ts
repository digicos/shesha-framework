import { IObjectMetadata } from "../../interfaces";
import { IPropertyMetadata } from "../../interfaces/metadata";
import { MetadataBuilder, MetadataBuilderAction } from "./metadataBuilder";
export interface StandardConstantWithCustomName {
    uid: string;
    name: string;
}
export type StandardConstantInclusionArgs = string | StandardConstantWithCustomName;
export interface AvailableConstantsArgs {
    addGlobalConstants?: boolean;
    standardConstants?: StandardConstantInclusionArgs[];
    onBuild?: (metaBuilder: MetadataBuilder) => void;
}
export declare const useGlobalConstants: () => IPropertyMetadata[];
export declare const useFormDataRegistration: () => MetadataBuilderAction;
export declare const useAppContextRegistration: () => MetadataBuilderAction;
export declare const useAvailableConstantsMetadata: ({ addGlobalConstants, onBuild, standardConstants }: AvailableConstantsArgs) => IObjectMetadata;
export declare const useAvailableStandardConstantsMetadata: () => IObjectMetadata;
