import { IEvaluateComplexStringResult, IMatchData } from '../providers/form/utils';
export type EvaluationType = 'mustache' | 'javascript';
export interface IEvaluateNodeArgs {
    expression: string;
    type: EvaluationType;
    [key: string]: any;
}
export interface IEvaluateNode {
    evaluate: IEvaluateNodeArgs;
}
export interface IEvaluateJsonLogicNode {
    evaluate: IEvaluateNodeArgs[];
}
export declare const extractVars: (jsonLogic: object) => string[];
export interface IArgumentEvaluationResult {
    handled: boolean;
    value?: any;
}
export type JsonLogicContainerProcessingCallback = (operator: string, args: object[], argIndex: number) => IArgumentEvaluationResult;
export interface OnEvaluatedArguments extends IEvaluateComplexStringResult {
    expression: string;
}
export interface IJsonLogicConversionOptions {
    argumentEvaluator: JsonLogicContainerProcessingCallback;
    mappings: IMatchData[];
    onEvaluated?: (args: OnEvaluatedArguments) => void;
    getVariableDataType?: (variable: string) => Promise<string>;
}
export declare const getEvaluationNodeFromJsonLogicNode: (node: any) => IEvaluateNode;
export declare const convertJsonLogicNode: (jsonLogic: object, options: IJsonLogicConversionOptions) => Promise<object>;
export interface IMustacheEvaluateNodeArgs {
    expression: string;
    required: boolean;
}
export interface IMustacheEvaluateNode {
    evaluate: IMustacheEvaluateNodeArgs[];
}
export declare const isLegacyMustacheEvaluationNode: (node: any) => node is IMustacheEvaluateNode;
