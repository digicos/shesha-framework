import { IApiEndpoint } from "../../../interfaces/metadata";
import { IFormDataLoader, FormDataLoadingPayload } from "./interfaces";
import { IToolboxComponents } from "../../../interfaces";
import { HttpClientApi } from "../../../providers/sheshaApplication/publicApi";
import { IMetadataDispatcher } from "../../../providers/metadataDispatcher/contexts";
import { IEntityEndpointsEvaluator } from "../../../components/configurableForm/useActionEndpoint";
export interface GqlLoaderArguments {
    httpClient: HttpClientApi;
    metadataDispatcher: IMetadataDispatcher;
    toolboxComponents: IToolboxComponents;
    endpointsEvaluator: IEntityEndpointsEvaluator;
}
export declare class GqlLoader implements IFormDataLoader {
    #private;
    constructor(args: GqlLoaderArguments);
    canLoadData: (formArguments: any) => boolean;
    getEndpointAsync: (payload: FormDataLoadingPayload) => Promise<IApiEndpoint>;
    loadAsync: (payload: FormDataLoadingPayload) => Promise<any>;
}
export declare const useGqlLoader: () => IFormDataLoader;
