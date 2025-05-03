import { MutableRefObject } from 'react';
import { IModelItem } from '../../../../interfaces/modelConfigurator';
export interface IUpdateChildItemsPayload {
    index: number[];
    childs: IModelItem[];
}
export interface IAddItemPayload {
    parentId?: string;
    item: IModelItem;
}
export interface IUpdateItemSettingsPayload {
    id: string;
    settings: IModelItem;
}
export interface IPropertiesEditorStateContext {
    items: IModelItem[];
    selectedItemId?: string;
    onChange?: (items: IModelItem[]) => void;
    selectedItemRef?: MutableRefObject<any>;
}
export interface IPropertiesEditorActionsContext {
    addItem: (parentId?: string) => Promise<IModelItem>;
    deleteItem: (uid: string) => void;
    selectItem: (uid: string) => void;
    updateChildItems: (payload: IUpdateChildItemsPayload) => void;
    getItem: (uid: string) => IModelItem;
    updateItem: (payload: IUpdateItemSettingsPayload) => void;
}
export declare const PROPERTIES_EDITOR_CONTEXT_INITIAL_STATE: IPropertiesEditorStateContext;
export declare const PropertiesEditorStateContext: import("react").Context<IPropertiesEditorStateContext>;
export declare const PropertiesEditorActionsContext: import("react").Context<IPropertiesEditorActionsContext>;
