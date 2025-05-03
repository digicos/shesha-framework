import React, { Context, PropsWithChildren } from 'react';
import { IListEditorStateContext, IListEditorActionsContext } from './contexts';
import { ValueMutator } from './interfaces';
export type ListItemFactory<TItem = any> = (items: TItem[]) => TItem;
export interface IGenericListEditorProviderProps<TItem extends object> {
    initialState: IListEditorStateContext<TItem>;
    stateContext: Context<IListEditorStateContext<TItem>>;
    actionContext: Context<IListEditorActionsContext<TItem>>;
    value: TItem[];
    onChange: ValueMutator<TItem[]>;
    onSelectionChange?: (value: TItem) => void;
    initNewItem: ListItemFactory<TItem>;
    readOnly: boolean;
}
declare const GenericListEditorProvider: <TItem extends object>({ children, initialState, stateContext, actionContext, value, onChange, onSelectionChange, initNewItem, readOnly, }: PropsWithChildren<IGenericListEditorProviderProps<TItem>>) => React.JSX.Element;
export { GenericListEditorProvider };
