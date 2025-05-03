import { FC } from 'react';
import { IStoredFilter } from '../../providers/dataTable/interfaces';
export interface ITableViewSelectorRendererProps {
    filters?: IStoredFilter[];
    hidden?: boolean;
    selectedFilterId?: string;
    onSelectFilter: (id?: string) => void;
}
export declare const TableViewSelectorRenderer: FC<ITableViewSelectorRendererProps>;
export default TableViewSelectorRenderer;
