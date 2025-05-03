import { Row } from 'react-table';
import { IFlagsSetters, IFlagsState } from '../../interfaces';
import { IConfigurableColumnsProps } from '../datatableColumnsConfigurator/models';
import { ColumnFilter, DataFetchingMode, IColumnSorting, IPublicDataTableActions, IStoredFilter, ITableColumn, ITableFilter, IndexColumnFilterOption, GroupingItem, SortMode, ColumnSorting, ITableDataColumn, DataFetchDependency, ISortingItem, FilterExpression } from './interfaces';
import { IHasModelType, IRepository } from './repository/interfaces';
/** Table Selection */
export interface ISelectionProps {
    index?: number;
    id?: string;
    row: any;
}
/** Table context */
export type IFlagProgressFlags = 'isFiltering' | 'isSelectingColumns' | 'fetchTableData' | 'exportToExcel';
export type IFlagSucceededFlags = 'exportToExcel' | 'fetchTableData';
export type IFlagErrorFlags = 'exportToExcel';
export type IFlagActionedFlags = '__DEFAULT__';
export declare const DEFAULT_PAGE_SIZE_OPTIONS: number[];
export declare const MIN_COLUMN_WIDTH = 150;
export interface ITableColumnUserSettings {
    id: string;
    show?: boolean;
    width?: number;
}
export interface IDataTableUserConfig {
    pageSize?: number;
    currentPage?: number;
    quickSearch: string;
    columns?: ITableColumnUserSettings[];
    tableSorting: IColumnSorting[];
    selectedFilterIds?: string[];
    advancedFilter?: ITableFilter[];
}
export declare const DEFAULT_DT_USER_CONFIG: IDataTableUserConfig;
export interface IDataTableStoredConfig {
    columns?: ITableColumn[];
    tableFilter?: ITableFilter[];
    storedFilters?: IStoredFilter[];
}
export interface IDataTableStateContext extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags>, IHasModelType {
    exportToExcelError?: string;
    exportToExcelWarning?: string;
    /** Configurable columns. Is used in pair with entityType  */
    configurableColumns?: IConfigurableColumnsProps[];
    /** Pre-defined stored filters. configurable in the forms designer */
    predefinedFilters?: IStoredFilter[];
    permanentFilter?: FilterExpression;
    /** table columns */
    columns?: ITableColumn[];
    groupingColumns: ITableDataColumn[];
    /** Datatable data (fetched from the back-end) */
    tableData?: object[];
    /** Default sort by */
    defaultSortBy?: string;
    /** Default sort order */
    defaultSortOrder?: string;
    /** Selected page size */
    selectedPageSize?: number;
    /** Data fetching mode (paging or fetch all) */
    dataFetchingMode: DataFetchingMode;
    /** Current page number */
    currentPage?: number;
    /** Total number of pages */
    totalPages?: number;
    /** Total number of rows */
    totalRows?: number;
    /** Total number of rows before the filtration */
    totalRowsBeforeFilter?: number;
    /** Quick search string */
    quickSearch?: string;
    /** Columns sorting */
    standardSorting?: IColumnSorting[];
    userSorting?: IColumnSorting[];
    /** Rows grouping */
    grouping?: GroupingItem[];
    /** Sort mode (standard or strict) */
    sortMode?: SortMode;
    /** Sort sorting: order by */
    strictSortBy?: string;
    /** Sort sorting: sorting order */
    strictSortOrder?: ColumnSorting;
    /** Available page sizes */
    pageSizeOptions?: number[];
    /** Advanced filter: applied values */
    tableFilter?: ITableFilter[];
    /** Advanced filter: current editor state */
    tableFilterDirty?: ITableFilter[];
    /** Selected filters (stored or predefined) */
    selectedStoredFilterIds?: string[];
    /** index of selected row */
    actionedRow?: any;
    /** List of Ids of selected rows */
    selectedIds?: string[];
    /** Dblclick handler */
    onDblClick?: (...params: any[]) => void;
    /** Select row handler */
    onSelectRow?: (index: number, row: any) => void;
    isFetchingTableData?: boolean;
    hasFetchTableDataError?: boolean;
    properties?: string[];
    saveFilterModalVisible?: boolean;
    persistSelectedFilters?: boolean;
    userConfigId?: string;
    selectedRow?: ISelectionProps;
    selectedRows?: {
        [key in string]: string;
    }[];
    allowReordering: boolean;
    hoverRowId?: string;
    dragState?: DragState;
}
export type DragState = 'started' | 'finished' | null;
export interface IDataTableActionsContext extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags>, IPublicDataTableActions {
    toggleColumnVisibility?: (val: string) => void;
    setCurrentPage?: (page: number) => void;
    changePageSize?: (size: number) => void;
    toggleColumnFilter?: (columnIds: string[]) => void;
    removeColumnFilter?: (columnIdToRemoveFromFilter: string) => void;
    changeFilterOption?: (filterColumnId: string, filterOptionValue: IndexColumnFilterOption) => void;
    changeFilter?: (filterColumnId: string, filterValue: ColumnFilter) => void;
    applyFilters?: () => void;
    clearFilters?: () => void;
    /** change quick search text without refreshing of the table data */
    changeQuickSearch?: (val: string) => void;
    /** change quick search and refresh table data */
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
    /**
     * Register columns in the table context. Is used for configurable tables
     */
    registerConfigurableColumns: (ownerId: string, columns: IConfigurableColumnsProps[]) => void;
    /**
     * Call this function to indicate that your component (table/list) require columns
     */
    requireColumns: () => void;
    registerDataFetchDependency: (ownerId: string, dependency: DataFetchDependency) => void;
    unregisterDataFetchDependency: (ownerId: string) => void;
    changeDisplayColumn: (displayColumnName: string) => void;
    changePersistedFiltersToggle: (persistSelectedFilters: boolean) => void;
    /**
     * Get current repository of the datatable
     */
    getRepository: () => IRepository;
    /**
     * Set row data after inline editing
     */
    setRowData: (rowIndex: number, data: any) => void;
    setSelectedRow: (index: number, row: any) => void;
    setHoverRowId: (id: string) => void;
    setDragState: (dragState: DragState) => void;
    setMultiSelectedRow: (rows: Row[] | Row) => void;
    setColumnWidths: (widths: IColumnWidth[]) => void;
}
export interface IColumnWidth {
    id: string;
    width: number;
}
export declare const DATA_TABLE_CONTEXT_INITIAL_STATE: IDataTableStateContext;
export interface DataTableFullInstance extends IDataTableStateContext, IDataTableActionsContext {
}
export declare const DataTableStateContext: import("react").Context<IDataTableStateContext>;
export declare const DataTableActionsContext: import("react").Context<IDataTableActionsContext>;
