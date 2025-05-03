import { Reducer } from 'react';
export interface IUndoableOptions {
    limit?: number;
    includeAction?: (actionName: string) => boolean;
}
export interface StateWithHistory<State> {
    past: State[];
    present: State;
    future: State[];
    _latestUnfiltered?: State;
}
export interface Action {
    type: string;
}
export declare enum UndoableActionEnums {
    UNDO = "@undoable/UNDO",
    REDO = "@undoable/REDO",
    CLEAR_HISTORY = "@undoable/CLEAR_HISTORY"
}
export declare const UndoableActionCreators: {
    undo: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
    redo: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
    clearHistory: import("redux-actions").ActionFunction1<void, import("redux-actions").Action<void>>;
};
export default function undoable<State>(reducer: Reducer<State, Action>, options: IUndoableOptions): Reducer<StateWithHistory<State>, Action>;
