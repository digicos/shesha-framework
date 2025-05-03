import { AxiosResponse } from 'axios';
import IRequestHeaders from '../../interfaces/requestHeaders';
import { FC } from 'react';
import { ConfigurationItemVersionStatus } from './models';
import { FormConfigurationDto } from '../../providers/form/api';
import { IAbpWrappedGetEntityResponse } from '../../interfaces/gql';
import { IErrorInfo } from '../../interfaces/errorInfo';
interface IErrorDetailsProps {
    error: IErrorInfo;
}
export declare const ErrorDetails: FC<IErrorDetailsProps>;
export declare const showErrorDetails: (error: any) => void;
export interface ItemWithIdPayload {
    id: string;
}
export interface IConfigurationFrameworkHookArguments {
    backendUrl: string;
    httpHeaders: IRequestHeaders;
}
interface IHasHttpSettings {
    backendUrl: string;
    httpHeaders: IRequestHeaders;
}
export interface IHasConfigurableItemId {
    itemId: string;
}
interface UpdateItemStatusArgs extends IHasHttpSettings {
    id: string;
    status: ConfigurationItemVersionStatus;
    onSuccess?: () => void;
    onFail?: (e: any) => void;
}
export declare const updateItemStatus: (props: UpdateItemStatusArgs) => Promise<void>;
export interface IPublishItemPayload extends IHasHttpSettings {
    id: string;
}
export interface IPublishItemResponse {
    id: string;
}
export declare const publishItem: (payload: IPublishItemPayload) => Promise<IPublishItemResponse>;
export interface ISetItemReadyPayload extends IHasHttpSettings {
    id: string;
}
export interface ISetItemReadyResponse {
    id: string;
}
export declare const setItemReady: (payload: ISetItemReadyPayload) => Promise<ISetItemReadyResponse>;
export interface IDeleteItemPayload extends IHasHttpSettings {
    id: string;
}
export interface IDeleteItemResponse {
    id: string;
}
export declare const deleteItem: (payload: IDeleteItemPayload) => Promise<IDeleteItemResponse>;
export interface ICreateNewItemVersionPayload extends IHasHttpSettings {
    id: string;
}
export interface ICreateNewItemVersionResponse {
    id: string;
}
export declare const createNewVersionRequest: (payload: ICreateNewItemVersionPayload) => Promise<AxiosResponse<IAbpWrappedGetEntityResponse<FormConfigurationDto>>>;
export declare const createNewVersion: (payload: ICreateNewItemVersionPayload) => Promise<ICreateNewItemVersionResponse>;
export interface ICancelItemVersionPayload extends IHasHttpSettings {
    id: string;
}
export interface ICancelItemVersionResponse {
    id: string;
}
export declare const itemCancelVersion: (payload: ICancelItemVersionPayload) => Promise<ICancelItemVersionResponse>;
export interface IDownloadItemAsJsonPayload extends IHasHttpSettings {
    id: string;
}
export interface IDownloadItemAsJsonResponse {
    id: string;
}
export declare const downloadAsJson: (payload: IDownloadItemAsJsonPayload) => Promise<IDownloadItemAsJsonResponse>;
export declare const ConfigurationFrameworkActions: {
    updateStatus: (props: UpdateItemStatusArgs) => Promise<void>;
    cancelVersion: (payload: ICancelItemVersionPayload) => Promise<ICancelItemVersionResponse>;
    publish: (payload: IPublishItemPayload) => Promise<IPublishItemResponse>;
    setReady: (payload: ISetItemReadyPayload) => Promise<ISetItemReadyResponse>;
    createNewVersion: (payload: ICreateNewItemVersionPayload) => Promise<ICreateNewItemVersionResponse>;
    createNewVersionRequest: (payload: ICreateNewItemVersionPayload) => Promise<AxiosResponse<IAbpWrappedGetEntityResponse<FormConfigurationDto>>>;
};
export {};
