import { ComponentType } from "react";
import { FC } from "react";
import { IHasRepository, IRepository } from "./interfaces";
export interface IWithNullRepositoryArgs {
    value?: object;
}
export declare const useNullRepository: (args: IWithNullRepositoryArgs) => IRepository;
export declare function withNullRepository<WrappedProps>(WrappedComponent: ComponentType<WrappedProps & IHasRepository>, args: IWithNullRepositoryArgs): FC<WrappedProps>;
