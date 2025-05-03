import { CellStyleFunc, ITableColumn } from '../../providers/dataTable/interfaces';
import { Cell } from 'react-table';
export declare const getCellStyleAccessor: (columnItem: ITableColumn) => CellStyleFunc;
export declare const getAnchoredCellStyleAccessor: (row: Cell<any, any, any>[], cell: Cell<any>, rowIndex: number) => React.CSSProperties;
