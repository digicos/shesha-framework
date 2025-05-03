import { FC } from 'react';
import { ITableViewProps } from '../../../../providers/dataTable/filters/models';
export type BaseFilterProperties = Omit<ITableViewProps, "expression">;
export interface IFilterItemPropertiesProps {
    value?: BaseFilterProperties;
    onChange: (newValue: BaseFilterProperties) => void;
    readOnly: boolean;
}
export declare const FilterItemProperties: FC<IFilterItemPropertiesProps>;
