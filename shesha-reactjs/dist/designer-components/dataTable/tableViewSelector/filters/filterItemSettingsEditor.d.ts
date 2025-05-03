import { ITableViewProps } from '../../../../providers/dataTable/filters/models';
import { FC } from 'react';
export interface IFilterItemSettingsEditorProps {
    value?: ITableViewProps;
    onChange: (newValue: ITableViewProps) => void;
    readOnly: boolean;
}
export declare const FilterItemSettingsEditor: FC<IFilterItemSettingsEditorProps>;
