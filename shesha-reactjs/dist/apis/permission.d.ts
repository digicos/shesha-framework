import { UseGetProps } from '../hooks/useGet';
import { IAjaxResponse } from '../interfaces/ajaxResponse';
import { GuidEntityReferenceDto } from './common';
export interface PermissionDto {
    id?: string | null;
    module?: GuidEntityReferenceDto | null;
    name?: string | null;
    displayName?: string | null;
    description?: string | null;
    parentName?: string | null;
    isDbPermission?: boolean;
    parent?: PermissionDto;
    child?: PermissionDto[] | null;
}
export interface PermissionGetAllTreeQueryParams {
    'api-version'?: string;
}
export type PermissionDtoListAjaxResponse = IAjaxResponse<PermissionDto[] | null>;
export type UsePermissionGetAllTreeProps = Omit<UseGetProps<PermissionDtoListAjaxResponse, PermissionGetAllTreeQueryParams, void>, 'path'>;
export declare const usePermissionGetAllTree: (props: UsePermissionGetAllTreeProps) => import("../hooks/useGet").UseGetReturn<PermissionDtoListAjaxResponse, unknown, PermissionGetAllTreeQueryParams, void>;
export declare const usePermissionUpdateParent: () => import("../hooks/useMutate").IUseMutateResponseFixedEndpoint<PermissionDto, any>;
export interface PermissionDeleteQueryParams {
    name?: string;
    'api-version'?: string;
}
export declare const usePermissionDelete: () => import("../hooks/useMutate").IUseMutateResponseFixedEndpoint<PermissionDeleteQueryParams, any>;
