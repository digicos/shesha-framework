import { ComponentType } from "react";
import { FC } from "react";
import { IRepository, IHasRepository, IHasModelType } from "./interfaces";
export interface IWithBackendRepositoryArgs {
    entityType: string;
    getListUrl: string;
    customCreateUrl?: string;
    customUpdateUrl?: string;
    customDeleteUrl?: string;
}
export declare const BackendRepositoryType = "backend-repository";
export interface ICreateOptions {
    customUrl?: string;
}
export interface IUpdateOptions {
    customUrl?: string;
}
export interface IDeleteOptions {
    customUrl?: string;
}
export interface IBackendRepository extends IRepository<ICreateOptions, IUpdateOptions, IDeleteOptions> {
    entityType: string;
}
export declare const useBackendRepository: (args: IWithBackendRepositoryArgs) => IBackendRepository;
export declare function withBackendRepository<WrappedProps>(WrappedComponent: ComponentType<WrappedProps & IHasRepository & IHasModelType>): FC<WrappedProps>;
