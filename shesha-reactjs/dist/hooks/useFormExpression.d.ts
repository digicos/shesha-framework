import { IConfigurableActionConfiguration } from '../interfaces/configurableAction';
import { GenericDictionary } from '../providers';
import { IExecuteActionPayload } from '../providers/configurableActionsDispatcher/contexts';
interface IFormExpression {
    argumentsEvaluationContext: GenericDictionary;
    executeAction: (payload: IExecuteActionPayload | IConfigurableActionConfiguration) => void;
    executeBooleanExpression: (expression: string, returnBoolean?: boolean) => boolean;
    executeExpression: (expression?: string) => any;
}
export declare const useFormExpression: () => IFormExpression;
export {};
