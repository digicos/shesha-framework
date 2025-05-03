import { FC } from 'react';
import { ColumnFilter, IndexColumnFilterOption } from '../../providers/dataTable/interfaces';
import { ProperyDataType } from '../../interfaces/metadata';
export declare const getFilterOptions: (dataType: string) => IndexColumnFilterOption[];
export interface IColumnItemFilterProps {
    id: string;
    filterName: string;
    accessor: string;
    referenceListName: string;
    referenceListModule: string;
    entityReferenceTypeShortAlias: string;
    autocompleteUrl?: string;
    dataType: ProperyDataType;
    filter: ColumnFilter;
    filterOption: IndexColumnFilterOption;
    onRemoveFilter?: (id: string) => void;
    onChangeFilterOption?: (filterId: string, filterOption: IndexColumnFilterOption) => void;
    onChangeFilter?: (filterId: string, filter: ColumnFilter) => void;
    applyFilters?: () => void;
}
export declare const ColumnItemFilter: FC<IColumnItemFilterProps>;
export default ColumnItemFilter;
