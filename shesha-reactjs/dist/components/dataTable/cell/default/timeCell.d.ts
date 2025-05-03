import React from 'react';
import { IDataCellProps } from '../interfaces';
export interface ITimeCellProps<D extends object = {}, V = any> extends IDataCellProps<D, V> {
}
export declare const TimeCell: <D extends object = {}, V = number>(props: ITimeCellProps<D, V>) => React.JSX.Element;
export default TimeCell;
