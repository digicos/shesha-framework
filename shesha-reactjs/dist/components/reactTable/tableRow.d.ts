import { FC } from 'react';
import { Row } from 'react-table';
import { InlineSaveMode } from './interfaces';
import { IFlatComponentsStructure } from '../../providers/form/models';
export type RowEditMode = 'read' | 'edit';
export interface ISortableRowProps {
    prepareRow: (row: Row<any>) => void;
    onClick: (row: Row<any>) => void;
    onDoubleClick: (row: Row<any>, index: number) => void;
    row: Row<any>;
    index: number;
    selectedRowIndex?: number;
    allowEdit: boolean;
    updater?: (data: any) => Promise<any>;
    allowDelete: boolean;
    deleter?: () => Promise<any>;
    editMode?: RowEditMode;
    allowChangeEditMode: boolean;
    inlineSaveMode?: InlineSaveMode;
    inlineEditorComponents?: IFlatComponentsStructure;
    inlineDisplayComponents?: IFlatComponentsStructure;
}
interface RowDragHandleProps {
    row: Row<any>;
}
export declare const RowDragHandle: FC<RowDragHandleProps>;
export declare const TableRow: FC<ISortableRowProps>;
export declare const SortableRow: FC<ISortableRowProps>;
export {};
