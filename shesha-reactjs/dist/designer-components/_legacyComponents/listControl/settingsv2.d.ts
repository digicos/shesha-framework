import { FC } from 'react';
import { IListItemsProps } from './models';
export interface IListControlSettingsProps {
    readOnly: boolean;
    model: IListItemsProps;
    onSave: (model: IListItemsProps) => void;
    onCancel: () => void;
    onValuesChange?: (changedValues: any, values: IListItemsProps) => void;
}
export declare const ListControlSettings: FC<IListControlSettingsProps>;
