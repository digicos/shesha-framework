import { IComponentMetadata } from '../../../providers';
import { IComponentWrapperProps, ICrudOptions, ITableCrudOptions } from './interfaces';
export declare const adjustWidth: (currentWidth: {
    minWidth: number;
    maxWidth: number;
}, crudOptions: ICrudOptions) => {
    minWidth: number;
    maxWidth: number;
};
export declare const asNumber: (value: any) => number;
export declare const getInjectables: ({ defaultRow, defaultValue }: IComponentWrapperProps) => IComponentMetadata;
export declare const getCruadActionConditions: (currentOptions: ITableCrudOptions, prevCrudOptions: ITableCrudOptions) => ICrudOptions;
