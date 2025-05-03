import { IModelItem } from '../../../../interfaces/modelConfigurator';
export interface IItemPosition {
    ownerArray: IModelItem[];
    index: number;
}
export declare const getItemPositionById: (items: IModelItem[], id: string) => IItemPosition;
export declare const getItemById: (items: IModelItem[], id: string) => IModelItem;
