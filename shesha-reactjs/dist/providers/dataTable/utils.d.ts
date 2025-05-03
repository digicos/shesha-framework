import { Duration, Moment } from 'moment';
import { IConfigurableColumnsProps } from '../../providers/datatableColumnsConfigurator/models';
import { IDataTableStateContext, IDataTableUserConfig } from './contexts';
import { ColumnSorting, DataTableColumnDto, IColumnSorting, IStoredFilter, ITableColumn, ITableDataColumn, ITableFilter, SortDirection } from './interfaces';
export declare const hasDynamicFilter: (filters: IStoredFilter[]) => boolean;
export declare const sortDirection2ColumnSorting: (value?: SortDirection) => ColumnSorting;
export declare const columnSorting2SortDirection: (value?: ColumnSorting) => SortDirection;
export declare const ADVANCEDFILTER_DATE_FORMAT = "DD/MM/YYYY";
export declare const ADVANCEDFILTER_DATETIME_FORMAT = "DD/MM/YYYY HH:mm";
export declare const ADVANCEDFILTER_TIME_FORMAT = "HH:mm";
export declare const getMoment: (value: any, format: string) => Moment;
export declare const getDuration: (value: any) => Duration;
export declare const advancedFilter2JsonLogic: (advancedFilter: ITableFilter[], columns: ITableColumn[]) => object[];
export declare const getIncomingSelectedStoredFilterIds: (filters: IStoredFilter[], id: string) => string[];
export declare const prepareColumn: (column: IConfigurableColumnsProps, columns: DataTableColumnDto[], userConfig: IDataTableUserConfig) => ITableColumn;
/**
 * Get data columns from list of columns
 */
export declare const getTableDataColumns: (columns: ITableColumn[]) => ITableDataColumn[];
export declare const getTableFormColumns: (columns: ITableColumn[]) => ITableDataColumn[];
export declare const getTableDataColumn: (columns: ITableColumn[], id: string) => ITableDataColumn;
export declare const isStandardSortingUsed: (state: IDataTableStateContext) => Boolean;
export declare const getCurrentSorting: (state: IDataTableStateContext, groupingSupported: boolean) => IColumnSorting[];
