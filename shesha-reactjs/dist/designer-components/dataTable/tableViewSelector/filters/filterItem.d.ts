import { ITableViewProps } from '../../../../providers/dataTable/filters/models';
import { FC } from 'react';
import { ItemChangeDetails } from '../../../../components/listEditor';
export interface IFilterItemProps {
    value?: ITableViewProps;
    onChange?: (newValue: ITableViewProps, changeDetails: ItemChangeDetails) => void;
    readOnly: boolean;
}
export declare const FilterItem: FC<IFilterItemProps>;
