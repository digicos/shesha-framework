import { NestedPropertyMetadatAccessor } from './contexts';
import { MetadataFetcher } from '../../utils/metadata/metadataBuilder';
import { useEntityMetadataFetcher } from './entities/provider';
import { IEntityMetadataFetcher } from './entities/models';
import { MetadataDispatcherProvider, useMetadataDispatcher } from './provider';
declare const useNestedPropertyMetadatAccessor: (modelType: string) => NestedPropertyMetadatAccessor;
declare const useMetadataFetcher: () => MetadataFetcher;
export { MetadataDispatcherProvider, useMetadataDispatcher, useNestedPropertyMetadatAccessor, useMetadataFetcher, type IEntityMetadataFetcher, useEntityMetadataFetcher, };
