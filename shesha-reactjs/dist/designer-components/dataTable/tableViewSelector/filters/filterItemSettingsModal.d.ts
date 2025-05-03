import { ITableViewProps } from '../../../../providers/dataTable/filters/models';
import { FC } from 'react';
export interface IFilterItemSettingsModalProps {
    value?: ITableViewProps;
    onSave: (newValue: ITableViewProps) => void;
    onCancel: () => void;
    readOnly: boolean;
}
export declare const FilterItemSettingsModal: FC<IFilterItemSettingsModalProps>;
