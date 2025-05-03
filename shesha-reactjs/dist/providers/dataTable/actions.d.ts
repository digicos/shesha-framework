import { Row } from 'react-table';
import { IConfigurableColumnsProps } from '../datatableColumnsConfigurator/models';
import { DragState, IDataTableUserConfig, ISelectionProps } from './contexts';
import { DataFetchingMode, DataTableColumnDto, IColumnSorting, IGetListDataPayload, IStoredFilter, ITableDataInternalResponse, ITableFilter, IndexColumnFilterOption, SortMode, ColumnSorting, ISortingItem, GroupingItem, FilterExpression } from './interfaces';
export declare enum DataTableActionEnums {
    FetchColumnsSuccess = "FETCH_COLUMNS_SUCCESS",
    FetchTableData = "FETCH_TABLE_DATA",
    FetchTableDataSuccess = "FETCH_TABLE_DATA_SUCCESS",
    FetchTableDataError = "FETCH_TABLE_DATA_ERROR",
    SetRowData = "SET_ROW_DATA",
    ExportToExcelRequest = "EXPORT_TO_EXCEL_REQUEST",
    ExportToExcelSuccess = "EXPORT_TO_EXCEL_SUCCESS",
    ExportToExcelError = "EXPORT_TO_EXCEL_ERROR",
    ExportToExcelWarning = "EXPORT_TO_EXCEL_WARNING",
    ChangePageSize = "CHANGE_PAGE_SIZE",
    SetCurrentPage = "SET_CURRENT_PAGE",
    ToggleColumnVisibility = "TOGGLE_COLUMN_VISIBILITY",
    ToggleColumnFilter = "TOGGLE_COLUMN_FILTER",
    RemoveColumnFilter = "REMOVE_COLUMN_FILTER",
    ChangeFilterOption = "CHANGE_FILTER_OPTION",
    ChangeFilter = "CHANGE_FILTER",
    ApplyFilter = "APPLY_FILTER",
    ChangeQuickSearch = "CHANGE_QUICK_SEARCH",
    ToggleSaveFilterModal = "TOGGLE_SAVE_FILTER_MODAL",
    ChangeUserConfigId = "CHANGE_USER_CONFIG_ID",
    ChangeSelectedRow = "CHANGE_SELECTED_ROW",
    ChangeActionedRow = "CHANGE_ACTIONED_ROW",
    ChangeSelectedStoredFilterIds = "CHANGE_SELECTED_STORED_FILTER_IDS",
    SetPredefinedFilters = "REGISTER_STORED_FILTER",
    SetPermanentFilter = "SET_PERMANENT_FILTER",
    ChangeSelectedIds = "CHANGE_SELECTED_IDS",
    RegisterConfigurableColumns = "REGISTER_CONFIGURABLE_COLUMNS",
    OnSelectRow = "ON_SELECT_ROW",
    OnSort = "ON_SORT",
    OnGroup = "ON_GROUP",
    SetModelType = "SET_MODEL_TYPE",
    SetDataFetchingMode = "SET_DATA_FETCHING_MODE",
    ChangeDisplayColumn = "CHANGE_DISPLAY_COLUMN",
    ChangePersistedFiltersToggle = "CHANGE_PERSISTED_FILTERS_TOGGLE",
    SetSelectedRow = "SET_SELECTED_ROW",
    SetHoverRow = "SET_HOVER_ROW",
    SetDraggingState = "SET_DRAGGING_STATE",
    SetMultiSelectedRow = "SET_MULTI_SELECTED_ROW",
    FetchGroupingColumns = "FETCH_GROUPING_COLUMNS",
    FetchGroupingColumnsSuccess = "FETCH_GROUPING_COLUMNS_SUCCESS",
    SetSortingSettings = "SET_SORTING_SETTINGS",
    SetStandardSorting = "SET_STANDARD_SORTING"
}
export declare const setSelectedRowAction: import("redux-actions").ActionFunction1<ISelectionProps, import("redux-actions").Action<ISelectionProps>>;
export declare const setHoverRowAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const setDraggingRowAction: import("redux-actions").ActionFunction1<DragState, import("redux-actions").Action<DragState>>;
export declare const setMultiSelectedRowAction: import("redux-actions").ActionFunction1<Row<{}> | Row<{}>[], import("redux-actions").Action<Row<{}> | Row<{}>[]>>;
export declare const setModelTypeAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const fetchTableDataAction: import("redux-actions").ActionFunction1<IGetListDataPayload, import("redux-actions").Action<IGetListDataPayload>>;
export declare const fetchTableDataSuccessAction: import("redux-actions").ActionFunction1<ITableDataInternalResponse, import("redux-actions").Action<ITableDataInternalResponse>>;
export declare const fetchTableDataErrorAction: import("redux-actions").ActionFunction0<import("redux-actions").Action<void>>;
export interface ISetRowDataPayload {
    rowIndex: number;
    rowData: any;
}
export declare const setRowDataAction: import("redux-actions").ActionFunction1<ISetRowDataPayload, import("redux-actions").Action<ISetRowDataPayload>>;
export interface IFetchColumnsSuccessSuccessPayload {
    columns: DataTableColumnDto[];
    configurableColumns: IConfigurableColumnsProps[];
    userConfig: IDataTableUserConfig;
}
export declare const fetchColumnsSuccessSuccessAction: import("redux-actions").ActionFunction1<IFetchColumnsSuccessSuccessPayload, import("redux-actions").Action<IFetchColumnsSuccessSuccessPayload>>;
export declare const changePageSizeAction: import("redux-actions").ActionFunction1<number, import("redux-actions").Action<number>>;
export declare const changeQuickSearchAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const toggleSaveFilterModalAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const setCurrentPageAction: import("redux-actions").ActionFunction1<number, import("redux-actions").Action<number>>;
export declare const toggleColumnVisibilityAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const toggleColumnFilterAction: import("redux-actions").ActionFunction1<string[], import("redux-actions").Action<string[]>>;
export declare const removeColumFilterAction: import("redux-actions").ActionFunction1<any, import("redux-actions").Action<string>>;
export interface IChangeFilterOptionPayload {
    filterColumnId: string;
    filterOptionValue: IndexColumnFilterOption;
}
export declare const changeFilterOptionAction: import("redux-actions").ActionFunction1<IChangeFilterOptionPayload, import("redux-actions").Action<IChangeFilterOptionPayload>>;
export interface IChangeFilterAction {
    filterColumnId: string;
    filterValue: any;
}
export declare const changeFilterAction: import("redux-actions").ActionFunction1<IChangeFilterAction, import("redux-actions").Action<IChangeFilterAction>>;
export declare const applyFilterAction: import("redux-actions").ActionFunction1<ITableFilter[], import("redux-actions").Action<ITableFilter[]>>;
export declare const changeUserConfigIdAction: import("redux-actions").ActionFunction1<any, import("redux-actions").Action<any>>;
export declare const changeSelectedRowAction: import("redux-actions").ActionFunction1<any, import("redux-actions").Action<any>>;
export declare const changeActionedRowAction: import("redux-actions").ActionFunction1<any, import("redux-actions").Action<any>>;
export declare const changeSelectedStoredFilterIdsAction: import("redux-actions").ActionFunction1<string[], import("redux-actions").Action<string[]>>;
export interface ISetPredefinedFiltersPayload {
    predefinedFilters: IStoredFilter[];
    userConfig: IDataTableUserConfig;
}
export declare const setPredefinedFiltersAction: import("redux-actions").ActionFunction1<ISetPredefinedFiltersPayload, import("redux-actions").Action<ISetPredefinedFiltersPayload>>;
export interface ISetPermanentFilterActionPayload {
    filter: FilterExpression;
}
export declare const setPermanentFilterAction: import("redux-actions").ActionFunction1<ISetPermanentFilterActionPayload, import("redux-actions").Action<ISetPermanentFilterActionPayload>>;
export declare const changeSelectedIdsAction: import("redux-actions").ActionFunction1<string[], import("redux-actions").Action<string[]>>;
export declare const exportToExcelRequestAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const exportToExcelSuccessAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const exportToExcelErrorAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const exportToExcelWarningAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export interface IRegisterConfigurableColumnsPayload {
    /** owner of the columns list, not used now and may be removed later */
    ownerId: string;
    columns: IConfigurableColumnsProps[];
}
export declare const registerConfigurableColumnsAction: import("redux-actions").ActionFunction1<IRegisterConfigurableColumnsPayload, import("redux-actions").Action<IRegisterConfigurableColumnsPayload>>;
export declare const onSortAction: import("redux-actions").ActionFunction1<IColumnSorting[], import("redux-actions").Action<IColumnSorting[]>>;
export declare const onGroupAction: import("redux-actions").ActionFunction1<ISortingItem[], import("redux-actions").Action<ISortingItem[]>>;
export declare const changeDisplayColumnAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const changePersistedFiltersToggleAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const setDataFetchingModeAction: import("redux-actions").ActionFunction1<DataFetchingMode, import("redux-actions").Action<DataFetchingMode>>;
export interface IFetchGroupingColumnsSuccessPayload {
    grouping: GroupingItem[];
    columns: DataTableColumnDto[];
}
export declare const fetchGroupingColumnsSuccessAction: import("redux-actions").ActionFunction1<IFetchGroupingColumnsSuccessPayload, import("redux-actions").Action<IFetchGroupingColumnsSuccessPayload>>;
export interface ISortingSettingsActionPayload {
    sortMode?: SortMode;
    strictSortBy?: string;
    strictSortOrder?: ColumnSorting;
    allowReordering: boolean;
}
export declare const setSortingSettingsAction: import("redux-actions").ActionFunction1<ISortingSettingsActionPayload, import("redux-actions").Action<ISortingSettingsActionPayload>>;
export declare const setStandardSortingAction: import("redux-actions").ActionFunction1<IColumnSorting[], import("redux-actions").Action<IColumnSorting[]>>;
