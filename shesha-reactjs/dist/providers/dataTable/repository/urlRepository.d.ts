import { ComponentType } from 'react';
import { FC } from 'react';
import { IRepository, IHasRepository } from './interfaces';
export interface IWithUrlRepositoryArgs {
    getListUrl: string;
}
export declare const UrlRepositoryType = "url-repository";
export interface IUrlRepository extends IRepository {
}
export declare const useUrlRepository: (args: IWithUrlRepositoryArgs) => IUrlRepository;
export declare function withUrlRepository<WrappedProps>(WrappedComponent: ComponentType<WrappedProps & IHasRepository>): FC<WrappedProps>;
