import React from 'react';
import { IDataCellProps } from '../interfaces';
export interface IDateTimeCellProps<D extends object = {}, V = any> extends IDataCellProps<D, V> {
}
export declare const DateTimeCell: <D extends object = {}, V = any>(props: IDateTimeCellProps<D, V>) => React.JSX.Element;
export default DateTimeCell;
