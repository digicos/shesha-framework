import { HttpClientApi } from "../../../providers/sheshaApplication/publicApi";
import { FormDataSubmitPayload, IFormDataSubmitter } from "./interfaces";
import { IApiEndpoint, IToolboxComponents } from "../../../interfaces";
import { StandardEntityActions } from "../../../interfaces/metadata";
import { IEntityEndpointsEvaluator } from "../../../components/configurableForm/useActionEndpoint";
export interface GqlSubmitterArguments {
    httpClient: HttpClientApi;
    endpointsEvaluator: IEntityEndpointsEvaluator;
    toolboxComponents: IToolboxComponents;
}
export declare class GqlSubmitter implements IFormDataSubmitter {
    #private;
    constructor(args: GqlSubmitterArguments);
    prepareDataForSubmit: (payload: FormDataSubmitPayload) => Promise<any>;
    getEndpointAsync: (payload: FormDataSubmitPayload, entityAction: StandardEntityActions) => Promise<IApiEndpoint>;
    submitAsync: (payload: FormDataSubmitPayload) => Promise<any>;
}
export declare const useGqlSubmitter: () => IFormDataSubmitter;
