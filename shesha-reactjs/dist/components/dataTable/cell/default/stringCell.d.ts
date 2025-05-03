import React from 'react';
import { IDataCellProps } from '../interfaces';
export interface IStringCellProps<D extends object = {}, V = any> extends IDataCellProps<D, V> {
}
export declare const StringCell: <D extends object = {}, V = any>(props: IStringCellProps<D, V>) => React.JSX.Element;
export default StringCell;
