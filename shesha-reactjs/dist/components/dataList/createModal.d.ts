import { FC } from 'react';
import { FormRawMarkup, IFormSettings, IPersistedFormProps } from '../../interfaces';
import { NewItemInitializer } from './models';
export interface IDataListItemCreateModalProps {
    id: string;
    formInfo?: IPersistedFormProps;
    creater?: (data: any) => Promise<any>;
    data?: object | NewItemInitializer;
    markup: FormRawMarkup;
    formSettings: IFormSettings;
    onToggle: (isOpen: boolean) => void;
    width?: string;
}
declare const DataListItemCreateModal: FC<IDataListItemCreateModalProps>;
export default DataListItemCreateModal;
