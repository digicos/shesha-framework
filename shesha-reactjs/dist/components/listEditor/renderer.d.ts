import React from 'react';
import { IListEditor, IListEditorContext } from './contexts';
import { ListEditorChildrenFn, ListEditorSectionRenderingFn } from '.';
import { ListItem } from './models';
export interface IListEditorRendererProps<TItem = any> {
    contextAccessor: () => IListEditorContext<TItem>;
    children: ListEditorChildrenFn<TItem>;
    level?: number;
    header?: ListEditorSectionRenderingFn<TItem>;
    parentItem?: TItem;
}
export interface MakeListContextArgs<TItem = any> {
    value: TItem[];
    onChange: (value: TItem[]) => void;
    onReorder: (value: TItem[], prevValue: TItem[]) => void;
    initNewItem: (items: TItem[]) => TItem;
    selectedItem?: TItem;
    setSelectedItem?: (item: TItem) => void;
}
export declare const makeListContext: <TItem = any>({ value, onChange, initNewItem, selectedItem, setSelectedItem, onReorder }: MakeListContextArgs<TItem>) => IListEditor<TItem>;
export declare const ListEditorRenderer: <TItem extends ListItem>(props: IListEditorRendererProps<TItem>) => React.JSX.Element;
