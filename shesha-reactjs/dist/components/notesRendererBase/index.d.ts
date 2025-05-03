import { FC, CSSProperties } from 'react';
import { INote, ICreateNotePayload } from '../../providers/notes/contexts';
export interface INotesRendererBaseProps {
    showSaveBtn?: boolean;
    showCommentBox?: boolean;
    commentListStyles?: CSSProperties;
    className?: string;
    commentListClassName?: string;
    style?: CSSProperties;
    isFetchingNotes?: boolean;
    isPostingNotes?: boolean;
    notes?: INote[];
    postNotes: (payload: ICreateNotePayload) => void;
    deleteNotes: (selectedCommentId: string) => void;
    buttonFloatRight?: boolean;
    autoSize?: boolean;
    allowDelete?: boolean;
}
export declare const NotesRendererBase: FC<INotesRendererBaseProps>;
export default NotesRendererBase;
