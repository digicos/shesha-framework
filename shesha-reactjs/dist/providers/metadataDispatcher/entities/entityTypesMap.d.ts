import { IEntityTypeIndentifier } from "../../../providers/sheshaApplication/publicApi/entities/models";
import { IEntityTypesMap } from "./models";
export declare class EntityTypesMap implements IEntityTypesMap {
    #private;
    constructor();
    register: (className: string, accessor: IEntityTypeIndentifier) => void;
    resolve: (className: string) => IEntityTypeIndentifier;
    clear: () => void;
}
