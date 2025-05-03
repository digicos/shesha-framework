import React from 'react';
import { IDataCellProps } from '../interfaces';
export interface IDateCellProps<D extends object = {}, V = any> extends IDataCellProps<D, V> {
}
export declare const DateCell: <D extends object = {}, V = any>(props: IDateCellProps<D, V>) => React.JSX.Element;
export default DateCell;
