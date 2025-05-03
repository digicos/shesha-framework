import { FC, PropsWithChildren } from 'react';
import { IPropertyMetadata, ProperyDataType } from '../../interfaces/metadata';
import { IMetadataContext, MetadataType } from './contexts';
export interface IMetadataProviderProps {
    id?: string;
    modelType: string;
    dataType?: MetadataType;
}
declare const MetadataProvider: FC<PropsWithChildren<IMetadataProviderProps>>;
declare function useMetadata(require: boolean): IMetadataContext;
/**
 * Get list of properties filtered by data type
 *
 * @param dataTypes data types filter
 * @returns
 */
declare const useMetaProperties: (dataTypes: ProperyDataType[]) => IPropertyMetadata[];
declare const ConditionalMetadataProvider: FC<PropsWithChildren<IMetadataProviderProps>>;
export { MetadataProvider, ConditionalMetadataProvider, useMetaProperties, useMetadata };
