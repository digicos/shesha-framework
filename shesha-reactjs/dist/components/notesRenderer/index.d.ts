import { FC, CSSProperties } from 'react';
export interface INotesRendererProps {
    showCommentBox?: boolean;
    ownerId?: string;
    ownerType?: string;
    commentListStyles?: CSSProperties;
    buttonPostion?: 'left' | 'right';
    autoSize?: boolean;
    allowDelete?: boolean;
}
export declare const NotesRenderer: FC<INotesRendererProps>;
export default NotesRenderer;
