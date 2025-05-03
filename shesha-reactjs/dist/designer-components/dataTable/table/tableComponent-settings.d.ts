import { FC } from 'react';
import { ITableComponentProps } from './models';
import { ISettingsFormFactoryArgs } from '../../../interfaces';
export interface IProps {
    readOnly: boolean;
    model: ITableComponentProps;
    onSave: (model: ITableComponentProps) => void;
    onCancel: () => void;
    onValuesChange?: (changedValues: any, values: ITableComponentProps) => void;
}
declare const TableSettingsForm: FC<ISettingsFormFactoryArgs<ITableComponentProps>>;
export default TableSettingsForm;
