import { BaseAccessor } from "../common/baseAccessor";
import { EntityTypeAccessor } from "./entityTypeAccessor";
import { EntitiesManager } from "./manager";
export interface IEntitiesModuleAccessor {
}
/**
 * Entities: module accessor
 */
export declare class EntitiesModuleAccessor extends BaseAccessor<EntityTypeAccessor, EntitiesManager> implements IEntitiesModuleAccessor {
    createChild: (accessor: string) => EntityTypeAccessor<string, import("./models").IEntity<string>>;
}
