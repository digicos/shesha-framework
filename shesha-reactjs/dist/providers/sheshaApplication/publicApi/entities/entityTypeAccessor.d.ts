import { IApiEndpoint, IEntityMetadata } from "../../../../interfaces";
import { EntitiesManager } from "./manager";
import { IEntity, IEntityTypeIndentifier } from "./models";
export interface IEntityEndpoints extends Record<string, IApiEndpoint> {
    create?: IApiEndpoint;
    read?: IApiEndpoint;
    update?: IApiEndpoint;
    delete?: IApiEndpoint;
}
/**
 * Entities accessor. It allows to manipulate entities.
 */
export interface IEntityTypeAccessor<TId, TEntity extends IEntity<TId>> {
    createAsync: (value: TEntity) => Promise<TEntity>;
    getAsync: (id: TId) => Promise<TEntity>;
    updateAsync: (value: TEntity) => Promise<TEntity>;
    deleteAsync: (id: TId) => Promise<void>;
    getApiEndpointsAsync: () => Promise<IEntityEndpoints>;
}
/**
 * Entities accessor. It allows to manipulate entities.
 */
export declare class EntityTypeAccessor<TId = string, TEntity extends IEntity<TId> = IEntity<TId>> implements IEntityTypeAccessor<TId, TEntity> {
    readonly _entityTypeId: IEntityTypeIndentifier;
    readonly _manager: EntitiesManager;
    readonly _metadata: Promise<IEntityMetadata>;
    constructor(manager: EntitiesManager, moduleAccessor: string, name: string);
    getApiEndpointsAsync: () => Promise<IEntityEndpoints>;
    createAsync: (value: TEntity) => Promise<TEntity>;
    getAsync: (id: TId) => Promise<TEntity>;
    updateAsync: (value: TEntity) => Promise<TEntity>;
    deleteAsync: (id: TId) => Promise<void>;
}
