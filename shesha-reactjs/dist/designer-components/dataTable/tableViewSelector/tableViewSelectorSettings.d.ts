import React from 'react';
import { ITableViewSelectorComponentProps } from './models';
export interface ITableViewSelectorSettingsProps {
    readOnly: boolean;
    model: ITableViewSelectorComponentProps;
    onSave: (model: ITableViewSelectorComponentProps) => void;
    onCancel: () => void;
    onValuesChange?: (changedValues: any, values: ITableViewSelectorComponentProps) => void;
}
declare function TableViewSelectorSettings(props: ITableViewSelectorSettingsProps): React.JSX.Element;
export default TableViewSelectorSettings;
