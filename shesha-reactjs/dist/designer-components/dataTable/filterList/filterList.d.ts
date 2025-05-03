import { ITableFilter } from '../../../providers/dataTable/interfaces';
import { FC } from 'react';
export interface IFilterListProps {
    filters?: ITableFilter[];
    clearFilters?: () => void;
    removeColumnFilter?: (columnId: string) => void;
    rows: number;
}
export declare const FilterList: FC<IFilterListProps>;
