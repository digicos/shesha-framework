import { UseGetProps } from '../hooks/useGet';
import * as RestfulShesha from '../utils/fetchers';
/**
 * Dynamic data result
 */
export interface IDynamicDataResult {
    [key: string]: any;
}
export interface EntitiesGetQueryParams {
    entityType?: string;
    /**
     * List of properties to fetch in GraphQL-like syntax. Supports nested properties
     */
    properties?: string;
    id?: string;
    'api-version'?: string;
}
export type entitiesGetProps = Omit<RestfulShesha.GetProps<IDynamicDataResult, unknown, EntitiesGetQueryParams, void>, 'queryParams'>;
export declare const entitiesGet: (queryParams: EntitiesGetQueryParams, props: entitiesGetProps) => Promise<IDynamicDataResult>;
export interface EntitiesGetAllQueryParams {
    entityType?: string;
    /**
     * List of properties to fetch in GraphQL-like syntax. Supports nested properties
     */
    properties?: string;
    /**
     * Filter string in JsonLogic format
     */
    filter?: string;
    /**
     * Quick search string. Is used to search entities by text
     */
    quickSearch?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
    'api-version'?: string;
}
export type UseEntitiesGetAllProps = Omit<UseGetProps<IDynamicDataResult, EntitiesGetAllQueryParams, void>, 'path'>;
export declare const useEntitiesGetAll: (props: UseEntitiesGetAllProps) => import("../hooks/useGet").UseGetReturn<IDynamicDataResult, unknown, EntitiesGetAllQueryParams, void>;
