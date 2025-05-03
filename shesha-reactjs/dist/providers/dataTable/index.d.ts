import { FC, PropsWithChildren } from 'react';
import { IHasModelType, IHasRepository, IRepository } from './repository/interfaces';
import { Row } from 'react-table';
import { IDataTableStateContext, IDataTableActionsContext, DragState, IColumnWidth } from './contexts';
import { ColumnFilter, DataFetchingMode, IColumnSorting, IFilterItem, IStoredFilter, ITableFilter, IndexColumnFilterOption, SortMode, ColumnSorting, GroupingItem, ISortingItem, DataFetchDependency, DataFetchDependencyStateSwitcher, ITableColumn, FilterExpression } from './interfaces';
import { IConfigurableColumnsProps } from '../datatableColumnsConfigurator/models';
interface IDataTableProviderBaseProps {
    /** Configurable columns. Is used in pair with entityType  */
    configurableColumns?: IConfigurableColumnsProps[];
    /**
     * Used for storing the data table state in the global store and publishing and listening to events
     * If not provided, the state will not be saved globally and the user cannot listen to and publish events
     */
    actionOwnerId?: string;
    actionOwnerName?: string;
    defaultFilter?: IFilterItem[];
    initialPageSize?: number;
    dataFetchingMode: DataFetchingMode;
    standardSorting?: ISortingItem[];
    /** Id of the user config, is used for saving of the user settings (sorting, paging etc) to the local storage. */
    userConfigId?: string;
    grouping?: GroupingItem[];
    sortMode?: SortMode;
    strictSortBy?: string;
    strictSortOrder?: ColumnSorting;
    allowReordering?: boolean;
    /**
     * Permanent filter exepression. Always applied irrespectively of other filters
     */
    permanentFilter?: FilterExpression;
}
interface IDataTableProviderWithRepositoryProps extends IDataTableProviderBaseProps, IHasRepository, IHasModelType {
}
interface IHasDataSourceType {
    sourceType: 'Form' | 'Entity' | 'Url';
}
export interface IHasFormDataSourceConfig {
    propertyName: string;
    getFieldValue?: (propertyName: string) => object[];
    onChange?: (...args: any[]) => void;
}
interface IUrlDataSourceConfig {
    getDataPath?: string;
    getExportToExcelPath?: string;
}
export interface IHasEntityDataSourceConfig extends IUrlDataSourceConfig {
    /** Type of entity */
    entityType: string;
}
export declare const DataTableProviderWithRepository: FC<PropsWithChildren<IDataTableProviderWithRepositoryProps>>;
type IDataTableProviderProps = IDataTableProviderBaseProps & IHasDataSourceType & (IHasFormDataSourceConfig | IUrlDataSourceConfig | IHasEntityDataSourceConfig) & {};
declare const DataTableProvider: FC<PropsWithChildren<IDataTableProviderProps>>;
declare function useDataTableState(require?: boolean): IDataTableStateContext;
declare function useDataTableActions(require?: boolean): IDataTableActionsContext;
declare function useDataTableStore(require?: boolean): {
    exportToExcelError?: string;
    exportToExcelWarning?: string;
    configurableColumns?: IConfigurableColumnsProps[];
    predefinedFilters?: IStoredFilter[];
    permanentFilter?: FilterExpression;
    columns?: ITableColumn[];
    groupingColumns: import("./interfaces").ITableDataColumn[];
    tableData?: object[];
    defaultSortBy?: string;
    defaultSortOrder?: string;
    selectedPageSize?: number;
    dataFetchingMode: DataFetchingMode;
    currentPage?: number;
    totalPages?: number;
    totalRows?: number;
    totalRowsBeforeFilter?: number;
    quickSearch?: string;
    standardSorting?: IColumnSorting[];
    userSorting?: IColumnSorting[];
    grouping?: GroupingItem[];
    sortMode?: SortMode;
    strictSortBy?: string;
    strictSortOrder?: ColumnSorting;
    pageSizeOptions?: number[];
    tableFilter?: ITableFilter[];
    tableFilterDirty?: ITableFilter[];
    selectedStoredFilterIds?: string[];
    actionedRow?: any;
    selectedIds?: string[];
    onDblClick?: (...params: any[]) => void;
    onSelectRow?: (index: number, row: any) => void;
    isFetchingTableData?: boolean;
    hasFetchTableDataError?: boolean;
    properties?: string[];
    saveFilterModalVisible?: boolean;
    persistSelectedFilters?: boolean;
    userConfigId?: string;
    selectedRow?: import("./contexts").ISelectionProps;
    selectedRows?: { [key in string]: string; }[];
    allowReordering: boolean;
    hoverRowId?: string;
    dragState?: DragState;
    isInProgress?: {
        isFiltering?: boolean;
        isSelectingColumns?: boolean;
        fetchTableData?: boolean;
        exportToExcel?: boolean;
    };
    succeeded?: {
        fetchTableData?: boolean;
        exportToExcel?: boolean;
    };
    error?: {
        exportToExcel?: string | boolean | import("../..").IErrorInfo;
    };
    actioned?: {
        __DEFAULT__?: boolean;
    };
    modelType: string;
    toggleColumnVisibility?: (val: string) => void;
    setCurrentPage?: (page: number) => void;
    changePageSize?: (size: number) => void;
    toggleColumnFilter?: (columnIds: string[]) => void;
    removeColumnFilter?: (columnIdToRemoveFromFilter: string) => void;
    changeFilterOption?: (filterColumnId: string, filterOptionValue: IndexColumnFilterOption) => void;
    changeFilter?: (filterColumnId: string, filterValue: ColumnFilter) => void;
    applyFilters?: () => void;
    clearFilters?: () => void;
    changeQuickSearch?: (val: string) => void;
    performQuickSearch?: (val: string) => void;
    toggleSaveFilterModal?: (visible: boolean) => void;
    changeActionedRow?: (data: any) => void;
    changeSelectedStoredFilterIds?: (selectedStoredFilterIds: string[]) => void;
    setPredefinedFilters: (filters: IStoredFilter[]) => void;
    setPermanentFilter: (filter: IStoredFilter) => void;
    onSort?: (sorting: IColumnSorting[]) => void;
    onGroup?: (grouping: ISortingItem[]) => void;
    changeSelectedIds?: (selectedIds: string[]) => void;
    getCurrentFilter: () => ITableFilter[];
    registerConfigurableColumns: (ownerId: string, columns: IConfigurableColumnsProps[]) => void;
    requireColumns: () => void;
    registerDataFetchDependency: (ownerId: string, dependency: DataFetchDependency) => void;
    unregisterDataFetchDependency: (ownerId: string) => void;
    changeDisplayColumn: (displayColumnName: string) => void;
    changePersistedFiltersToggle: (persistSelectedFilters: boolean) => void;
    getRepository: () => IRepository;
    setRowData: (rowIndex: number, data: any) => void;
    setSelectedRow: (index: number, row: any) => void;
    setHoverRowId: (id: string) => void;
    setDragState: (dragState: DragState) => void;
    setMultiSelectedRow: (rows: Row[] | Row) => void;
    setColumnWidths: (widths: IColumnWidth[]) => void;
    setIsInProgressFlag: (key: {
        isFiltering?: boolean;
        isSelectingColumns?: boolean;
        fetchTableData?: boolean;
        exportToExcel?: boolean;
    }) => void;
    setSucceededFlag: (key: {
        fetchTableData?: boolean;
        exportToExcel?: boolean;
    }) => void;
    setFailedFlag: (key: {
        exportToExcel?: boolean;
    }) => void;
    setActionedFlag: (key: {
        __DEFAULT__?: boolean;
    }) => void;
    resetIsInProgressFlag: () => void;
    resetSucceededFlag: () => void;
    resetFailedFlag: () => void;
    resetActionedFlag: () => void;
    resetAllFlag: () => void;
    refreshTable: () => void;
    exportToExcel?: () => void;
};
declare const useDataTable: typeof useDataTableStore;
/**
 * Define a dependency of the data fetching. Is used by the components which require some preparation logic before the data can be fetched by the DataTable context
 */
declare const useDataFetchDependency: (ownerId: string) => DataFetchDependencyStateSwitcher;
export default DataTableProvider;
export { DataTableProvider, useDataTable, useDataTableActions, useDataTableState, useDataTableStore, useDataFetchDependency };
