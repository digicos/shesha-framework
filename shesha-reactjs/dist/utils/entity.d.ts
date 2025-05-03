import { EntityData } from "../interfaces/gql";
export interface IUseEntityDisplayTextProps {
    entityType?: string;
    propertyName?: string;
    selection?: string | string[];
}
export interface IEntitySelectionResult {
    rows: EntityData[];
    loading: boolean;
}
export declare const useEntitySelectionData: (props: IUseEntityDisplayTextProps) => IEntitySelectionResult;
export declare const useEntityDisplayText: (props: IUseEntityDisplayTextProps) => string;
