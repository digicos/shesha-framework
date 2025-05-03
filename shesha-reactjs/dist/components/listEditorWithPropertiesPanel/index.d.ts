import React from 'react';
import { ListItem, ListItemWithId } from '../listEditor/models';
import { ListEditorChildrenFn, ListEditorSectionRenderingFn } from '../listEditor';
export interface ItemPropertiesRendererProps<TItem extends ListItem> {
    item: TItem;
    onChange: (newValues: TItem) => void;
    readOnly: boolean;
}
export interface IListEditorWithPropertiesPanelProps<TItem extends ListItemWithId> {
    readOnly: boolean;
    value: TItem[];
    onChange: (newValue: TItem[]) => void;
    header?: React.ReactNode;
    children: ListEditorChildrenFn<TItem>;
    addItemText?: string;
    groupHeader?: ListEditorSectionRenderingFn<TItem>;
    initNewItem: (items: TItem[]) => TItem;
    itemProperties: (itemProps: ItemPropertiesRendererProps<TItem>) => React.ReactNode;
    noSelectionProperties?: string | React.ReactElement;
}
export declare const ListEditorWithPropertiesPanel: <TItem extends ListItemWithId>({ value, onChange, readOnly, header, groupHeader, initNewItem, children, itemProperties, noSelectionProperties, addItemText }: IListEditorWithPropertiesPanelProps<TItem>) => React.JSX.Element;
