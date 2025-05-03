import { FC } from 'react';
import { ITableColumn } from '../../providers/dataTable/interfaces';
export interface IColumnsFilterSelectBaseProps {
    columns: ITableColumn[];
    appliedFiltersColumnIds: string[];
    toggleColumnFilter: (ids: string[]) => void;
}
export declare const ColumnsFilterSelectBase: FC<IColumnsFilterSelectBaseProps>;
export default ColumnsFilterSelectBase;
