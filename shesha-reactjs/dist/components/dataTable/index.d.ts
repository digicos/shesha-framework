import { ModalProps } from 'antd/lib/modal';
import { CSSProperties, FC, MutableRefObject } from 'react';
import { TableProps } from 'react-table';
import { DataTableFullInstance } from '../../providers/dataTable/contexts';
import { IShaDataTableProps } from './interfaces';
export interface IIndexTableOptions {
    omitClick?: boolean;
}
export interface IIndexTableProps extends IShaDataTableProps, TableProps {
    tableRef?: MutableRefObject<Partial<DataTableFullInstance> | null>;
    options?: IIndexTableOptions;
    containerStyle?: CSSProperties;
    tableStyle?: CSSProperties;
    minHeight?: number;
    maxHeight?: number;
    noDataText?: string;
    noDataSecondaryText?: string;
    noDataIcon?: string;
}
export interface IExtendedModalProps extends ModalProps {
    content?: string;
}
export declare const DataTable: FC<Partial<IIndexTableProps>>;
