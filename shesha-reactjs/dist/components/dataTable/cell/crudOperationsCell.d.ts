import React from 'react';
import { ITableCrudOperationsColumn } from '../../../providers/dataTable/interfaces';
import { IHasColumnConfig } from './interfaces';
export interface ICrudOperationsCellProps extends IHasColumnConfig<ITableCrudOperationsColumn> {
}
export declare const CrudOperationsCell: (_props: ICrudOperationsCellProps) => React.JSX.Element;
export default CrudOperationsCell;
