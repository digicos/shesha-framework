import React, { ReactNode } from 'react';
export interface IProps<TItem> {
    items: TItem[];
    defaultExpandAll?: boolean;
    defaultSelected?: string;
    searchText?: string;
    onChange: (item: TItem) => void;
    idFieldName?: string;
    nameFieldName?: string;
    childFieldName?: string;
    getChildren?: (item: TItem) => TItem[];
    getIsLeaf?: (item: TItem) => boolean;
    getIcon?: (item: TItem) => ReactNode;
    onRenterItem?: (item: TItem) => ReactNode;
}
export declare const ObjectsTree: <TItem>(props: IProps<TItem>) => React.JSX.Element;
