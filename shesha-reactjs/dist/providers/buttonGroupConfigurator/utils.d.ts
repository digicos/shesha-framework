import { ButtonGroupItemProps } from './models';
export interface IItemPosition {
    ownerArray: ButtonGroupItemProps[];
    index: number;
}
export declare const getItemPositionById: (items: ButtonGroupItemProps[], id: string) => IItemPosition;
export declare const getItemById: (items: ButtonGroupItemProps[], id: string) => ButtonGroupItemProps;
export declare const updateBranch: (items: ButtonGroupItemProps[], payload: {
    id: any;
    settings: any;
}) => ButtonGroupItemProps[];
