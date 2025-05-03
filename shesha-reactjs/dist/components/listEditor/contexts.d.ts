import { ListItemFactory } from "./provider";
export interface IListEditorState<TItem = any> {
    value: TItem[];
}
export interface IListEditorActions<TItem = any> {
    deleteItem: (index: number) => void;
    addItem: (factory?: ListItemFactory<TItem>) => void;
    insertItem: (index: number) => void;
    updateItem: (index: number, item: TItem) => void;
    updateList: (newItems: TItem[]) => void;
}
export interface IListEditor<TItem = any> extends IListEditorState<TItem>, IListEditorActions<TItem> {
}
export interface IListEditorStateContext<TItem = any> extends IListEditorState<TItem> {
    readOnly?: boolean;
    selectedItem?: TItem;
}
export interface IListEditorActionsContext<TItem = any> extends IListEditorActions<TItem> {
    setSelectedItem: (item: TItem) => void;
    refresh: (applyValue: boolean) => void;
}
export interface IListEditorContext<TItem = any> extends IListEditorStateContext<TItem>, IListEditorActionsContext<TItem> {
}
export declare const getListEditorContextInitialState: <TItem extends unknown>(value: TItem[]) => IListEditorStateContext<TItem>;
export declare const getListEditorStateContext: <TItem extends unknown>(initialState: IListEditorStateContext<TItem>) => import("react").Context<IListEditorStateContext<TItem>>;
export declare const getListEditorActionsContext: <TItem extends unknown>() => import("react").Context<IListEditorActionsContext<TItem>>;
