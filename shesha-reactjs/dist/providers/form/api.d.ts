import { ConfigurationItemsViewMode } from '../appConfigurator/models';
import { EntityAjaxResponse, IEntity } from '../../generic-pages/dynamic/interfaces';
import { FormDto, FormIdentifier, FormMarkupWithSettings, IComponentsDictionary, IFlatComponentsStructure, IFormDto, IFormSettings } from './models';
import { GetDataError } from '../../hooks';
import { IAbpWrappedGetEntityResponse } from '../../interfaces/gql';
import { IAjaxResponseBase } from '../../interfaces/ajaxResponse';
import { IPropertyMetadata } from '../../interfaces/metadata';
import { IErrorInfo } from '../../interfaces/errorInfo';
import { IToolboxComponents } from '../../interfaces';
/**
 * Form configuration DTO
 */
export interface FormConfigurationDto {
    id?: string;
    /**
     * Form path/id is used to identify a form
     */
    moduleId?: string | null;
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
     * Version status
     */
    versionStatus?: number;
    /**
     * Cache MD5, is used for client-side caching
     */
    cacheMd5?: string | null;
}
export interface IFormFetcherProps {
    lazy: boolean;
}
export interface IFormByIdProps {
    id: string;
}
export interface IFormByNameProps {
    module?: string;
    name: string;
    version?: number;
}
export type UseFormConfigurationByIdArgs = IFormByIdProps & IFormFetcherProps;
export type UseFormConfigurationByNameArgs = IFormByNameProps & IFormFetcherProps;
export type UseFormConfigurationArgs = {
    formId: FormIdentifier;
} & IFormFetcherProps;
export interface IUseFormConfigurationProps {
    id?: string;
    module?: string;
    name: string;
    version?: number;
    lazy: boolean;
}
export type FormProperties = Omit<FormConfigurationDto, 'markup'>;
export interface IFormMarkupResponse {
    requestParams: any;
    formConfiguration: IFormDto;
    loading: boolean;
    error: GetDataError<IAjaxResponseBase>;
    refetch: () => Promise<FormMarkupWithSettings>;
}
export declare const getMarkupFromResponse: (data: IAbpWrappedGetEntityResponse<FormConfigurationDto>) => FormMarkupWithSettings;
/**
 * Load form markup from the back-end
 */
export declare const getFormConfiguration: (formId: FormIdentifier, backendUrl: string, httpHeaders: HeadersInit) => Promise<IAbpWrappedGetEntityResponse<FormConfigurationDto, import("../../interfaces/gql").ErrorInfo>>;
export declare const useFormConfiguration: (args: UseFormConfigurationArgs) => IFormMarkupResponse;
export interface UseFormWitgDataArgs {
    formId?: FormIdentifier;
    dataId?: string;
    configurationItemMode?: ConfigurationItemsViewMode;
    onFormLoaded?: (form: IFormDto) => void;
    onDataLoaded?: (data: any) => void;
}
export type LoadingState = 'waiting' | 'loading' | 'ready' | 'failed';
export interface FormInfo extends Pick<FormDto, 'id' | 'module' | 'name' | 'versionNo' | 'versionStatus'> {
    flatStructure: IFlatComponentsStructure;
    settings: IFormSettings;
}
export interface FormWithDataResponse {
    form?: FormInfo;
    fetchedData?: IEntity;
    loadingState: LoadingState;
    loaderHint?: string;
    error?: IErrorInfo;
    dataFetcher?: () => Promise<EntityAjaxResponse | void>;
    refetcher?: () => void;
}
export interface FormWithDataState {
    loaderHint?: string;
    loadingState: LoadingState;
    fetchedData?: IEntity;
    gqlFields?: string;
    getDataUrl?: string;
    form?: FormInfo;
    error?: IErrorInfo;
    dataFetcher?: () => Promise<EntityAjaxResponse | void>;
}
interface IFieldData {
    name: string;
    child: IFieldData[];
    property: IPropertyMetadata;
}
export declare const filterDataByOutputComponents: (data: any, components: IComponentsDictionary, toolboxComponents: IToolboxComponents) => any;
export declare const gqlFieldsToString: (fields: IFieldData[]) => string;
export {};
