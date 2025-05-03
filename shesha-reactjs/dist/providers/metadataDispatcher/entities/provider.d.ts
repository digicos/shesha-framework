import React, { FC, PropsWithChildren } from 'react';
import { IEntityMetadataFetcher } from './models';
export declare const EntityMetadataFetcherContext: React.Context<IEntityMetadataFetcher>;
export declare const EntityMetadataFetcherProvider: FC<PropsWithChildren>;
export declare const useEntityMetadataFetcher: () => IEntityMetadataFetcher;
