import { FC } from 'react';
import { IPropertyMetadata } from '../../../interfaces/metadata';
export interface IProps {
    items: IPropertyMetadata[];
    defaultExpandAll: boolean;
    searchText?: string;
}
declare const DataSourceTree: FC<IProps>;
export default DataSourceTree;
