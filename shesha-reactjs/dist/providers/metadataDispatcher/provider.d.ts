import React, { FC, PropsWithChildren } from 'react';
import { IMetadataDispatcher } from './contexts';
export declare const MetadataDispatcherContext: React.Context<IMetadataDispatcher>;
export declare const MetadataDispatcherProvider: FC<PropsWithChildren>;
export declare const useMetadataDispatcher: () => IMetadataDispatcher;
