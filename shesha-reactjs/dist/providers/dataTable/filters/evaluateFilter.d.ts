import { IMatchData } from "../../../providers/form/utils";
import { NestedPropertyMetadatAccessor } from "../../../providers/metadataDispatcher/contexts";
import { FilterExpression } from "../interfaces";
interface IMatchDataWithPreparation extends IMatchData {
    prepare?: (data: any) => any;
}
export interface UseEvaluatedFilterArgs {
    filter?: FilterExpression;
    mappings: IMatchDataWithPreparation[];
    metadataAccessor?: NestedPropertyMetadatAccessor;
}
export declare const useEvaluatedFilter: (args: UseEvaluatedFilterArgs) => string;
export interface UseFormEvaluatedFilterArgs {
    filter?: FilterExpression;
    metadataAccessor?: NestedPropertyMetadatAccessor;
}
export declare const useFormEvaluatedFilter: (args: UseFormEvaluatedFilterArgs) => string;
export {};
