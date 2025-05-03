import React from 'react';
import { IDataCellProps } from '../interfaces';
export interface INumberCellProps<D extends object = {}, V = any> extends IDataCellProps<D, V> {
}
export declare const NumberCell: <D extends object = {}, V = any>(props: INumberCellProps<D, V>) => React.JSX.Element;
export default NumberCell;
