import { ComponentType } from "react";
import { FC } from "react";
import { IHasModelType, IHasRepository, IRepository } from "./interfaces";
export interface IWithInMemoryRepositoryArgs {
    valueAccessor: () => object[];
    onChange: (value: object[]) => void;
}
export declare const useInMemoryRepository: (args: IWithInMemoryRepositoryArgs) => IRepository;
export declare function withInMemoryRepository<WrappedProps>(WrappedComponent: ComponentType<WrappedProps & IHasRepository & IHasModelType>, args: IWithInMemoryRepositoryArgs): FC<WrappedProps>;
export interface IWithFormFieldRepositoryArgs {
    propertyName: string;
    getFieldValue?: (propertyName: string) => object[];
    onChange?: (...args: any[]) => void;
}
export declare function withFormFieldRepository<WrappedProps>(WrappedComponent: ComponentType<WrappedProps & IHasRepository & IHasModelType>): FC<WrappedProps>;
