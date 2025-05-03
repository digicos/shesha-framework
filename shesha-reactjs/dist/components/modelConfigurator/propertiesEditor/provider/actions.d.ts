import { IAddItemPayload, IUpdateChildItemsPayload, IUpdateItemSettingsPayload } from './contexts';
export declare enum ModelActionEnums {
    AddItem = "ADD_ITEM",
    DeleteItem = "DELETE_ITEM",
    UpdateItem = "UPDATE_ITEM",
    SelectItem = "SELECT_ITEM",
    UpdateChildItems = "UPDATE_CHILD_ITEMS"
}
export declare const addItemAction: import("redux-actions").ActionFunction1<IAddItemPayload, import("redux-actions").Action<IAddItemPayload>>;
export declare const deleteItemAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const selectItemAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const updateChildItemsAction: import("redux-actions").ActionFunction1<IUpdateChildItemsPayload, import("redux-actions").Action<IUpdateChildItemsPayload>>;
export declare const updateItemAction: import("redux-actions").ActionFunction1<IUpdateItemSettingsPayload, import("redux-actions").Action<IUpdateItemSettingsPayload>>;
