import React from 'react';
import { IDataCellProps } from '../interfaces';
export interface IReferenceListCellProps<D extends object = {}, V = any> extends IDataCellProps<D, V> {
}
export declare const ReferenceListCell: <D extends object = {}, V = any>(props: IReferenceListCellProps<D, V>) => React.JSX.Element;
