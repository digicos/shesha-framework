import { ListItemWithId } from '../../components/listEditor/models';
import React from 'react';
import { DefaultItemRenderer, ItemSettingsMarkupFactory } from './interfaces';
import { ListEditorChildrenFn } from '../../components/listEditor';
export interface ModalSettings {
    title?: string;
    header?: React.ReactNode;
}
export interface IItemListConfiguratorModalProps<TItem extends ListItemWithId> {
    readOnly: boolean;
    value?: TItem[];
    onChange?: (newValue: TItem[]) => void;
    initNewItem: (items: TItem[]) => TItem;
    settingsMarkupFactory: ItemSettingsMarkupFactory<TItem>;
    buttonText?: string;
    modalSettings?: ModalSettings;
    itemRenderer: ListEditorChildrenFn<TItem> | DefaultItemRenderer<TItem>;
    actualModelContext?: any;
}
export declare const ItemListConfiguratorModal: <TItem extends ListItemWithId>(props: IItemListConfiguratorModalProps<TItem>) => React.JSX.Element;
