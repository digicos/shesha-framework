export type ValueAccessor<TValue = any> = () => TValue;
export interface ProxyWithRefresh<T> {
    refreshAccessors: (accessors: ProxyPropertiesAccessors<T>) => void;
}
export type ProxyPropertiesAccessors<Type> = {
    [Property in keyof Type]: ValueAccessor<Type[Property]>;
};
export type TypedProxy<T> = T & ProxyWithRefresh<T>;
export declare class ObservableProxy<T> implements ProxyWithRefresh<T> {
    private _touchedProps;
    private _propAccessors;
    getPropertyValue(propName: string): any;
    get touchedProps(): Set<string>;
    refreshAccessors: (accessors: ProxyPropertiesAccessors<T>) => void;
    constructor(accessors: ProxyPropertiesAccessors<T>);
}
export declare const makeObservableProxy: <T = object>(accessors: ProxyPropertiesAccessors<T>) => TypedProxy<T>;
