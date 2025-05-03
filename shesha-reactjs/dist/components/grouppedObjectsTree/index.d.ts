import React, { ReactNode } from 'react';
export interface IGrouppedObjectsTreeProps<TItem> {
    defaultSelected?: string;
    items: TItem[];
    searchText?: string;
    groupBy?: string;
    openedKeys?: string[];
    idFieldName?: string;
    nameFieldName?: string;
    childFieldName?: string;
    onChange?: (item: TItem) => void;
    isMatch?: (item: TItem, searchText: string) => void;
    setOpenedKeys?: (keys: string[]) => void;
    onRenterItem?: (item: TItem) => ReactNode;
    getIcon?: (item: TItem) => ReactNode;
    getIsLeaf?: (item: TItem) => boolean;
    onGetGroupName?: (groupBy: string, data: string) => string;
}
export declare const GrouppedObjectsTree: <TItem>(props: IGrouppedObjectsTreeProps<TItem>) => React.JSX.Element;
export default GrouppedObjectsTree;
