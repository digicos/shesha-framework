import { ICreateNotePayload, INote, INoteSettings, INotesStateContext } from './contexts';
export declare enum NotesActionEnums {
    FetchNotesRequest = "FETCH_NOTES_REQUEST",
    FetchNotesSuccess = "FETCH_NOTES_SUCCESS",
    FetchNotesError = "FETCH_NOTES_ERROR",
    PostNotesRequest = "POST_NOTES_REQUEST",
    PostNotesSuccess = "POST_NOTES_SUCCESS",
    PostNotesError = "POST_NOTES_ERROR",
    DeleteNotesRequest = "DELETE_NOTES_REQUEST",
    DeleteNotesSuccess = "DELETE_NOTES_SUCCESS",
    DeleteNotesError = "DELETE_NOTES_ERROR",
    OnNoteAdded = "ON_NOTE_ADDED",
    OnNoteRemoved = "ON_NOTE_REMOVED",
    SetSettings = "SET_SETTINGS"
}
export declare const fetchNotesRequestAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<INotesStateContext>>;
export declare const fetchNotesSuccessAction: import("redux-actions").ActionFunction1<INote[], import("redux-actions").Action<INotesStateContext>>;
export declare const fetchNotesErrorAction: import("redux-actions").ActionFunction1<any, import("redux-actions").Action<INotesStateContext>>;
export declare const postNotesRequestAction: import("redux-actions").ActionFunction1<ICreateNotePayload, import("redux-actions").Action<INotesStateContext>>;
export declare const postNotesSuccessAction: import("redux-actions").ActionFunction1<INote | ICreateNotePayload, import("redux-actions").Action<INotesStateContext>>;
export declare const postNotesErrorAction: import("redux-actions").ActionFunction1<any, import("redux-actions").Action<INotesStateContext>>;
export declare const deleteNotesRequestAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<INotesStateContext>>;
export declare const deleteNotesSuccessAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<INotesStateContext>>;
export declare const deleteNotesErrorAction: import("redux-actions").ActionFunction1<any, import("redux-actions").Action<INotesStateContext>>;
export declare const onNoteAddedAction: import("redux-actions").ActionFunction1<INote, import("redux-actions").Action<INotesStateContext>>;
export declare const onNoteRemovedAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<INotesStateContext>>;
export declare const setSettingsAction: import("redux-actions").ActionFunction1<INoteSettings, import("redux-actions").Action<INotesStateContext>>;
