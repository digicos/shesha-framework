import { FC, PropsWithChildren } from 'react';
import { ICreateNotePayload, INote, INoteSettings } from './contexts';
declare const NotesProvider: FC<PropsWithChildren<INoteSettings>>;
declare function useNotesState(): import("./contexts").INotesStateContext;
declare function useNotesActions(): import("./contexts").INotesActionsContext;
declare function useNotes(): {
    fetchNotesRequest: () => void;
    postNotes: (payload: ICreateNotePayload) => void;
    deleteNotes: (selectedCommentId: string) => void;
    refreshNotes: () => void;
    setIsInProgressFlag: (key: {
        fetchNotes?: boolean;
        postNotes?: boolean;
        deleteNotes?: boolean;
    }) => void;
    setSucceededFlag: (key: {
        fetchNotes?: boolean;
        postNotes?: boolean;
        deleteNotes?: boolean;
    }) => void;
    setFailedFlag: (key: {
        fetchNotes?: boolean;
        postNotes?: boolean;
        deleteNotes?: boolean;
    }) => void;
    setActionedFlag: (key: {
        __DEFAULT__?: boolean;
    }) => void;
    resetIsInProgressFlag: () => void;
    resetSucceededFlag: () => void;
    resetFailedFlag: () => void;
    resetActionedFlag: () => void;
    resetAllFlag: () => void;
    notes?: INote[];
    newNotes?: ICreateNotePayload | INote;
    commentIdToBeDeleted?: string;
    errorInfo?: any;
    settings?: INoteSettings;
    isInProgress?: {
        fetchNotes?: boolean;
        postNotes?: boolean;
        deleteNotes?: boolean;
    };
    succeeded?: {
        fetchNotes?: boolean;
        postNotes?: boolean;
        deleteNotes?: boolean;
    };
    error?: {
        fetchNotes?: string | boolean | import("../..").IErrorInfo;
        postNotes?: string | boolean | import("../..").IErrorInfo;
        deleteNotes?: string | boolean | import("../..").IErrorInfo;
    };
    actioned?: {
        __DEFAULT__?: boolean;
    };
};
export default NotesProvider;
export { NotesProvider, useNotes, useNotesActions, useNotesState };
