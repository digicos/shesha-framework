import { UseGetProps } from '../hooks/useGet';
import { IAjaxResponse, IAjaxResponseBase } from '../interfaces/ajaxResponse';
import { GuidEntityReferenceDto } from './common';
export interface NoteDto {
    id?: string;
    /**
     * Id of the owner entity
     */
    ownerId: string;
    /**
     * Type short alias of the owner entity
     */
    ownerType: string;
    /**
     * Creation time
     */
    creationTime?: string | null;
    /**
     * Category of the note. Is used to split notes into groups
     */
    category?: number | null;
    /**
     * Note importance (priority)
     */
    priority?: number | null;
    /**
     * Id of the parent note
     */
    parentId?: string | null;
    /**
     * Text
     */
    noteText: string;
    author?: GuidEntityReferenceDto;
}
export interface CreateNoteDto {
    id?: string;
    /**
     * Id of the owner entity
     */
    ownerId: string;
    /**
     * Type short alias of the owner entity
     */
    ownerType: string;
    /**
     * Category of the note. Is used to split notes into groups
     */
    category?: number | null;
    /**
     * Note importance (priority)
     */
    priority?: number | null;
    /**
     * Id of the parent note
     */
    parentId?: string | null;
    /**
     * Text
     */
    noteText: string;
}
export interface NoteGetListQueryParams {
    /**
     * Id of the owner entity
     */
    ownerId: string;
    /**
     * Type short alias of the owner entity
     */
    ownerType: string;
    /**
     * Category of the note. Is used to split notes into groups
     */
    category?: number;
    /**
     * Set to true to get notes of all categories
     */
    allCategories?: boolean;
    /**
     * The requested API version
     */
    'api-version'?: string;
}
export type NoteDtoListAjaxResponse = IAjaxResponse<NoteDto[] | null>;
export type UseNoteGetListProps = Omit<UseGetProps<NoteDtoListAjaxResponse, NoteGetListQueryParams, void>, 'path'>;
export declare const useNoteGetList: (props: UseNoteGetListProps) => import("../hooks/useGet").UseGetReturn<NoteDtoListAjaxResponse, IAjaxResponseBase, NoteGetListQueryParams, void>;
export declare const useNoteCreate: () => import("../hooks/useMutate").IUseMutateResponseFixedEndpoint<any, any>;
