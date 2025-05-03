export interface IHasVersion {
    version?: number | 'latest';
}
export type Migration<TPrev = IHasVersion, TNext = IHasVersion, TContext = any> = (prev: TPrev, context: TContext) => TNext;
export interface MigrationRegistration<TPrev = IHasVersion, TNext = IHasVersion> {
    version: number;
    up: Migration<TPrev, TNext>;
}
export declare const isHasVersion: (value: any) => value is IHasVersion;
export interface IAddMigrationPayload<TModel = IHasVersion, TNext = IHasVersion> {
    version: number;
    migration: Migration<TModel, TNext>;
}
interface IMigrationRegistrationsOwner<TDst = IHasVersion, TContext = any> {
    addMigration: <TModel, TNext>(payload: IAddMigrationPayload<TModel, TNext>) => void;
    migrations: MigrationRegistration[];
    upgrade: (currentModel: IHasVersion, context: TContext) => TDst;
}
export declare class MigratorFluent<TModel = IHasVersion, TDst = IHasVersion, TContext = any> {
    readonly migrator: IMigrationRegistrationsOwner<TDst>;
    constructor(owner: IMigrationRegistrationsOwner<TDst>);
    add: <TNext = IHasVersion>(version: number, migration: Migration<TModel, TNext, TContext>) => MigratorFluent<TNext, TDst, TContext>;
}
export declare class Migrator<TSrc = IHasVersion, TDst = IHasVersion, TContext = any> implements IMigrationRegistrationsOwner<TDst> {
    migrations: MigrationRegistration[];
    constructor();
    addMigration: <TSrc_1, TNext>(payload: IAddMigrationPayload<TSrc_1, TNext>) => void;
    add: <TNext = IHasVersion>(version: number, migration: Migration<TSrc, TNext>) => MigratorFluent<TNext, TDst, TContext>;
    upgrade: (currentModel: IHasVersion, context: TContext) => TDst;
}
export {};
