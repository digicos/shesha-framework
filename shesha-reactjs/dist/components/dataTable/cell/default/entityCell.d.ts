import React from 'react';
import { IDataCellProps } from '../interfaces';
export interface IEntityCellProps<D extends object = {}, V = any> extends IDataCellProps<D, V> {
}
export declare const EntityCell: <D extends object = {}, V = any>(props: IEntityCellProps<D, V>) => React.JSX.Element;
export default EntityCell;
