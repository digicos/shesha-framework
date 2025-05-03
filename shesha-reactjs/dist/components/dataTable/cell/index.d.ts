import { CellProps, Renderer } from 'react-table';
import { ITableColumn } from '../../../interfaces';
import { IPropertyMetadata } from '../../../interfaces/metadata';
export declare const getCellRenderer: <D extends object = {}, V = any>(column: ITableColumn, propertyMeta?: IPropertyMetadata) => Renderer<CellProps<D, V>> | undefined;
