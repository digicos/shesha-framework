import { IMatchData } from '../../providers/form/utils';
import { IApiEndpoint } from '../../interfaces/metadata';
import { IFormSettings } from '../../providers/form/models';
export interface GetDefaultActionUrlPayload {
    actionName: string;
    modelType: string;
}
export interface GetFormActionUrlPayload {
    actionName: string;
    formSettings: IFormSettings;
    mappings: IMatchData[];
}
export interface IEntityEndpointsEvaluator {
    getDefaultActionUrl: (payload: GetDefaultActionUrlPayload) => Promise<IApiEndpoint>;
    getFormActionUrl: (payload: GetFormActionUrlPayload) => Promise<IApiEndpoint>;
}
export declare const useModelApiHelper: () => IEntityEndpointsEvaluator;
export interface UseEntityEndpointArguments {
    actionName: string;
    formSettings: IFormSettings;
    mappings: IMatchData[];
}
export declare const useModelApiEndpoint: (args: UseEntityEndpointArguments) => IApiEndpoint;
