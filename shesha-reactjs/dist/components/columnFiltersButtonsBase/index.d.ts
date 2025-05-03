import { FC } from 'react';
export interface IColumnFiltersButtonsBaseProps {
    applyFilters: () => void;
    clearFilters: () => void;
    toggleSaveFilterModal: (visible: boolean) => void;
    isFetchingTableData: boolean;
}
export declare const ColumnFiltersButtonsBase: FC<IColumnFiltersButtonsBaseProps>;
export default ColumnFiltersButtonsBase;
