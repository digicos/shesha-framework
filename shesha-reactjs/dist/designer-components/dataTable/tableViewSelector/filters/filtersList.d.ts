import { ITableViewProps } from '../../../../providers/dataTable/filters/models';
import { FC } from 'react';
export interface IFiltersListProps {
    value?: ITableViewProps[];
    onChange?: (newValue: ITableViewProps[]) => void;
    readOnly: boolean;
}
export declare const FiltersList: FC<IFiltersListProps>;
