export interface IBaseAccessor {
}
/**
 * Base group accessor
 */
export declare class BaseAccessor<TChild = IBaseAccessor, TManager = any> implements IBaseAccessor {
    readonly _accessor: string;
    readonly _children: Map<string, TChild>;
    readonly _manager: TManager;
    createChild(accessor: string): TChild;
    getChildAccessor(accessor: string): IBaseAccessor;
    constructor(manager: TManager, name: string);
}
