import { IAjaxResponse, IAjaxResponseBase } from '../interfaces/ajaxResponse';
import * as RestfulShesha from '../utils/fetchers';
import { FormIdFullNameDto } from './entityConfig';
import { HttpClientApi } from '../providers/sheshaApplication/publicApi';
import { ConfigurationItemsViewMode } from '../providers/appConfigurator/models';
/**
 * Status of the Shesha.Domain.ConfigurationItems.ConfigurationItem
 */
export type ConfigurationItemVersionStatus = 1 | 2 | 3 | 4 | 5;
/**
 * Form configuration DTO
 */
export interface FormConfigurationDto {
    id?: string;
    /**
     * Module Id
     */
    moduleId?: string | null;
    /**
     * Origin id
     */
    originId?: string | null;
    /**
     * Module name
     */
    module?: string | null;
    /**
     * Form name
     */
    name?: string | null;
    /**
     * Label
     */
    label?: string | null;
    /**
     * Description
     */
    description?: string | null;
    /**
     * Markup in JSON format
     */
    markup?: string | null;
    /**
     * Type of the form model
     */
    modelType?: string | null;
    /**
     * Version number
     */
    versionNo?: number;
    /**
     * If true, indicates that this is a last version of the form
     */
    isLastVersion?: boolean;
    versionStatus?: ConfigurationItemVersionStatus;
    suppress?: boolean;
    access?: number;
    permissions?: string[];
    /**
     * Cache MD5, is used for client-side caching
     */
    cacheMd5?: string | null;
}
export type FormConfigurationDtoAjaxResponse = IAjaxResponse<FormConfigurationDto>;
export interface FormConfigurationGetQueryParams {
    /**
     * Form configuration id
     */
    id?: string;
    /**
     * MD5 of the item. Is used for the client side caching.
     * If specified, the application should compare the value received from the client with a local cache and return http response with code 304 (not changed)
     */
    md5?: string;
    /**
     * The requested API version
     */
    'api-version'?: string;
}
export type formConfigurationGetProps = Omit<RestfulShesha.GetProps<FormConfigurationDtoAjaxResponse, IAjaxResponseBase, FormConfigurationGetQueryParams, void>, 'queryParams'>;
export declare const formConfigurationGet: (queryParams: FormConfigurationGetQueryParams, props: formConfigurationGetProps) => Promise<FormConfigurationDtoAjaxResponse>;
export interface FormConfigurationGetByNameQueryParams {
    /**
     * Module name
     */
    module?: string;
    /**
     * Form name
     */
    name?: string;
    /**
     * Form version number. Last published form is used when missing
     */
    version?: number;
    /**
     * MD5 of the item. Is used for the client side caching.
     * If specified, the application should compare the value received from the client with a local cache and return http response with code 304 (not changed)
     */
    md5?: string;
    /**
     * The requested API version
     */
    'api-version'?: string;
}
export type formConfigurationGetByNameProps = Omit<RestfulShesha.GetProps<FormConfigurationDtoAjaxResponse, IAjaxResponseBase, FormConfigurationGetByNameQueryParams, void>, 'queryParams'>;
/**
 * Get current form configuration by name
 */
export declare const formConfigurationGetByName: (queryParams: FormConfigurationGetByNameQueryParams, props: formConfigurationGetByNameProps) => Promise<FormConfigurationDtoAjaxResponse>;
export interface FormGetByNamePayload extends FormConfigurationGetByNameQueryParams {
    configurationItemMode?: ConfigurationItemsViewMode;
}
export declare const formConfigurationGetByName2: (httpClient: HttpClientApi, payload: FormGetByNamePayload) => Promise<import("../providers/sheshaApplication/publicApi/http/api").HttpResponse<FormConfigurationDtoAjaxResponse>>;
/**
 * Form update markup input
 */
export interface FormUpdateMarkupInput {
    id?: string;
    /**
     * Form markup (components) in JSON format
     */
    markup?: string | null;
    /** Form asscess mode */
    access?: number;
    /** Form permissions for Required premission mode */
    permissions?: string[];
}
export interface FormConfigurationUpdateMarkupQueryParams {
    /**
     * The requested API version
     */
    'api-version'?: string;
}
export type formConfigurationUpdateMarkupProps = Omit<RestfulShesha.MutateProps<void, unknown, FormConfigurationUpdateMarkupQueryParams, FormUpdateMarkupInput, void>, 'data'>;
/**
 * Update form markup
 */
export declare const formConfigurationUpdateMarkup: (data: FormUpdateMarkupInput, props: formConfigurationUpdateMarkupProps) => Promise<void>;
export interface FormPermissionsDto {
    name?: string | null;
    module?: string | null;
    permissions?: string[] | null;
}
export type FormPermissionsDtoAjaxResponse = IAjaxResponse<FormPermissionsDto[]>;
export interface FormConfigurationCheckPermissionsQueryParams {
    /**
     * The requested API version
     */
    'api-version'?: string;
}
export type formConfigurationCheckPermissionsProps = Omit<RestfulShesha.MutateProps<FormPermissionsDtoAjaxResponse, unknown, FormConfigurationCheckPermissionsQueryParams, FormIdFullNameDto[], void>, 'data'>;
/**
 * Check forms permissions
 */
export declare const formConfigurationCheckPermissions: (data: FormIdFullNameDto[], props: formConfigurationCheckPermissionsProps) => Promise<FormPermissionsDtoAjaxResponse>;
