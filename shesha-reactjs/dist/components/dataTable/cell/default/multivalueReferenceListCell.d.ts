import React from 'react';
import { IDataCellProps } from '../interfaces';
export interface IMultivalueReferenceListCellProps<D extends object = {}, V = any> extends IDataCellProps<D, V> {
}
export declare const MultivalueReferenceListCell: <D extends object = {}, V = any>(props: IMultivalueReferenceListCellProps<D, V>) => React.JSX.Element;
