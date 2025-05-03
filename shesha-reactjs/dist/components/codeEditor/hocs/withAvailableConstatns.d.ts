import { IObjectMetadata } from "../../../interfaces";
import { ComponentType, FC } from "react";
export interface IWithFormFieldRepositoryArgs {
    propertyName: string;
    getFieldValue?: (propertyName: string) => object[];
    onChange?: (...args: any[]) => void;
}
type WithObjectMetadata<T> = Omit<T, 'availableConstants'> & {
    availableConstants?: IObjectMetadata;
};
type WithObjectMetadataAccessor<T> = Omit<T, 'availableConstants'> & {
    availableConstants?: IObjectMetadata | (() => Promise<IObjectMetadata>);
};
export declare function withAvailableConstants<WrappedProps>(WrappedComponent: ComponentType<WithObjectMetadata<WrappedProps>>): FC<WithObjectMetadataAccessor<WrappedProps>>;
export {};
