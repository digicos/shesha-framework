import React from 'react';
import { IConfigurableCellProps, IDataCellProps } from './interfaces';
import { ITableDataColumn } from '../../../providers/dataTable/interfaces';
export declare const DefaultDataDisplayCell: <D extends object = {}, V = number>(props: IDataCellProps<D, V>) => React.JSX.Element;
export declare const CreateDataCell: (props: IConfigurableCellProps<ITableDataColumn>) => React.JSX.Element;
export declare const DataCell: <D extends object = {}, V = number>(props: IDataCellProps<D, V>) => React.JSX.Element;
export default DataCell;
