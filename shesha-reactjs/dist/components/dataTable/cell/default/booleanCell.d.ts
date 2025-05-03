import React from 'react';
import { IDataCellProps } from '../interfaces';
export interface IBooleanCellCellProps<D extends object = {}, V = any> extends IDataCellProps<D, V> {
}
export declare const BooleanCell: <D extends object = {}, V = any>(props: IBooleanCellCellProps<D, V>) => React.JSX.Element;
export default BooleanCell;
