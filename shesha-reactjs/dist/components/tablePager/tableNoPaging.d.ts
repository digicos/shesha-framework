import { FC } from 'react';
export interface ITablePagerBaseProps {
    /** Total number of rows to display on the table */
    totalRows: number;
}
export declare const TableNoPaging: FC<ITablePagerBaseProps>;
export default TableNoPaging;
