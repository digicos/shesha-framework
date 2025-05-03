import React from 'react';
import { ITableActionColumn } from '../../../providers/dataTable/interfaces';
import { ICommonCellProps } from './interfaces';
export interface IActionCellProps<D extends object = {}, V = any> extends ICommonCellProps<ITableActionColumn, D, V> {
}
export declare const ActionCell: <D extends object = {}, V = any>(props: IActionCellProps<D, V>) => React.JSX.Element;
export default ActionCell;
