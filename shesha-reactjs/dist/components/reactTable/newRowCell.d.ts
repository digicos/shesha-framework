import { FC } from 'react';
import { ColumnInstance } from 'react-table';
export interface INewRowCellProps {
    column: ColumnInstance;
    row?: ColumnInstance<{}>[];
    rowIndex?: number;
}
export declare const NewRowCell: FC<INewRowCellProps>;
