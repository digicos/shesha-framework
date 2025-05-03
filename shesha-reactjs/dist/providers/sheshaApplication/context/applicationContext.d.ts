import React, { FC, PropsWithChildren } from 'react';
import { IApplicationApi } from '../publicApi/applicationApi';
import { MetadataBuilder } from '../../../utils/metadata/metadataBuilder';
export interface IApplicationDataProviderProps {
}
export interface ApplicationPluginRegistration {
    name: string;
    buildMetadata: (builder: MetadataBuilder) => void;
    data: any;
}
export interface IApplicationActionsContext {
    registerPlugin: (plugin: ApplicationPluginRegistration) => void;
    unregisterPlugin: (pluginName: string) => void;
    getPlugin: (pluginName: string) => ApplicationPluginRegistration;
}
export declare const ApplicationActionsContext: React.Context<IApplicationActionsContext>;
export declare const ApplicationPublicApiContext: React.Context<IApplicationApi>;
export declare const ApplicationDataProvider: FC<PropsWithChildren<IApplicationDataProviderProps>>;
export declare const useApplicationActions: () => IApplicationActionsContext;
export declare const useApplicationPlugin: (plugin: ApplicationPluginRegistration) => void;
export declare const usePublicApplicationApi: () => IApplicationApi;
