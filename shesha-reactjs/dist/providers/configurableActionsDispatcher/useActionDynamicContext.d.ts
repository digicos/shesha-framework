import { IConfigurableActionConfiguration } from "../../index";
import { GenericDictionary } from "../form/models";
export interface UseActionDynamicContextArgs {
    actionConfiguration: IConfigurableActionConfiguration;
    baseContext: GenericDictionary;
}
export declare const useActionDynamicContext: ({}: UseActionDynamicContextArgs) => void;
