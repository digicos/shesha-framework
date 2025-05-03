import { NoteDto } from '../../apis/note';
import { IFlagsSetters, IFlagsState } from '../../interfaces';
export type IFlagProgressFlags = 'fetchNotes' | 'postNotes' | 'deleteNotes';
export type IFlagSucceededFlags = 'fetchNotes' | 'postNotes' | 'deleteNotes';
export type IFlagErrorFlags = 'fetchNotes' | 'postNotes' | 'deleteNotes';
export type IFlagActionedFlags = '__DEFAULT__';
export interface INoteSettings {
    ownerId: string;
    ownerType: string;
    category?: number;
    allCategories?: boolean;
}
export interface INote extends NoteDto {
}
export interface ICreateNotePayload {
    ownerId?: string;
    ownerType?: string;
    category?: number;
    priority?: number;
    parentId?: string;
    noteText: string;
    id?: string;
}
export interface INotesStateContext extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    notes?: INote[];
    newNotes?: ICreateNotePayload | INote;
    commentIdToBeDeleted?: string;
    errorInfo?: any;
    settings?: INoteSettings;
}
export interface INotesActionsContext extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    fetchNotesRequest: () => void;
    postNotes: (payload: ICreateNotePayload) => void;
    deleteNotes: (selectedCommentId: string) => void;
    refreshNotes: () => void;
}
export declare const COMMENTS_CONTEXT_INITIAL_STATE: INotesStateContext;
export declare const NotesStateContext: import("react").Context<INotesStateContext>;
export declare const NotesActionsContext: import("react").Context<INotesActionsContext>;
