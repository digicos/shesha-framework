import { FC } from 'react';
export interface ITablePagerBaseProps {
    /** Whether this component */
    disabled?: boolean;
    /** The options for page sizes */
    pageSizeOptions: number[];
    /** The current page the table is on */
    currentPage: number;
    /** Total number of rows to display on the table */
    totalRows: number;
    /** the selected page size of the table */
    selectedPageSize: number;
    /** show size changer of the table */
    showSizeChanger?: boolean;
    /** show size of table rows */
    showTotalItems?: boolean;
    /** A function to set the page the table should be on */
    setCurrentPage: (page: number) => void;
    /** A function to change  */
    changePageSize: (size: number) => void;
}
export declare const TablePaging: FC<ITablePagerBaseProps>;
export default TablePaging;
