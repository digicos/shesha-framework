import React from 'react';
import { IListEditorContext } from './contexts';
import { IGenericListEditorProps } from './interfaces';
import { ListItem } from './models';
export interface IListStateProps<TItem = any> {
    value: TItem[];
}
export interface NestedItemsRenderingArgs<TItem = any> {
    items: TItem[];
    onChange: (newValue: TItem[], changeDetails?: ItemChangeDetails) => void;
    initNewItem: (items: TItem[]) => TItem;
}
export interface ItemChangeDetails {
    isReorder: boolean;
    childsLengthDelta?: number;
}
export interface ListItemRenderingArgs<TItem = any> {
    item: TItem;
    itemOnChange: (newValue: TItem, changeDetails?: ItemChangeDetails) => void;
    index: number;
    readOnly: boolean;
    nestedRenderer?: (args: NestedItemsRenderingArgs<TItem>) => React.ReactNode | null;
}
export type ListEditorChildrenFn<TItem = any> = (args: ListItemRenderingArgs<TItem>) => React.ReactNode | null;
export interface ListEditorSectionRenderingArgs<TItem = any> {
    contextAccessor: () => IListEditorContext<TItem>;
    parentItem?: TItem;
    level: number;
    addItemText?: string;
}
export type ListEditorSectionRenderingFn<TItem = any> = (args: ListEditorSectionRenderingArgs<TItem>) => React.ReactNode | null;
export interface IListEditorProps<TItem = any> extends IGenericListEditorProps<TItem> {
    children: ListEditorChildrenFn<TItem>;
    header?: ListEditorSectionRenderingFn<TItem>;
    initNewItem: (items: TItem[]) => TItem;
}
export interface IListEditorProviderProps {
}
interface CreateListEditorComponentResult<TItem extends object> {
    ListEditorProvider: <T extends React.PropsWithChildren<IGenericListEditorProps<TItem>>>(props: T) => React.JSX.Element;
    useListEditorComponent: () => IListEditorContext<TItem>;
}
export declare const createListEditorComponent: <TItem extends object>() => CreateListEditorComponentResult<TItem>;
export declare const ListEditor: <TItem extends ListItem>({ children, header, value, onChange, onSelectionChange, initNewItem, readOnly, }: IListEditorProps<TItem>) => React.JSX.Element;
export {};
