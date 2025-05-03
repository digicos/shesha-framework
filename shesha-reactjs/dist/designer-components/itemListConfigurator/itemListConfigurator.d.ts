import { ListItemWithId } from '../../components/listEditor/models';
import React from 'react';
import { DefaultItemRenderer, ItemSettingsMarkupFactory } from './interfaces';
import { ListEditorChildrenFn } from '../../components/listEditor';
export interface IItemListConfiguratorProps<TItem extends ListItemWithId> {
    readOnly: boolean;
    value: TItem[];
    onChange: (newValue: TItem[]) => void;
    initNewItem: (items: TItem[]) => TItem;
    settingsMarkupFactory: ItemSettingsMarkupFactory<TItem>;
    itemRenderer: ListEditorChildrenFn<TItem> | DefaultItemRenderer<TItem>;
    header?: React.ReactNode;
    actualModelContext?: any;
}
export declare const ItemListConfigurator: <TItem extends ListItemWithId>(props: IItemListConfiguratorProps<TItem>) => React.JSX.Element;
