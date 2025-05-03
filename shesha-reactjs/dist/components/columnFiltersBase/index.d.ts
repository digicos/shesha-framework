import { FC } from 'react';
import { IndexColumnFilterOption, ITableColumn, ITableFilter } from '../../providers/dataTable/interfaces';
export interface IColumnFiltersBaseProps {
    columns: ITableColumn[];
    currentFilter?: ITableFilter[];
    changeFilterOption: (filterColumnId: string, filterOptionValue: IndexColumnFilterOption) => void;
    changeFilter: (filterColumnId: string, filterValue: any) => void;
    toggleColumnFilter: (columnIds: string[]) => void;
    applyFilters: () => void;
}
export declare const ColumnFiltersBase: FC<IColumnFiltersBaseProps>;
export default ColumnFiltersBase;
