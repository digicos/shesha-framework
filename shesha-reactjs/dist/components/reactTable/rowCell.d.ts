import { FC, ReactNode } from 'react';
import { Cell } from 'react-table';
export interface IRowCellProps {
    cell: Cell<any, any>;
    row?: Cell<any, any, any>[];
    rowIndex?: number;
    preContent?: ReactNode;
}
export declare const RowCell: FC<IRowCellProps>;
