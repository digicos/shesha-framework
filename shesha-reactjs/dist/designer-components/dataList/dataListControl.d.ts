import { FC } from 'react';
import { IDataListWithDataSourceProps } from './model';
import { FormApi } from '../../providers/form/formApi';
export declare const NotConfiguredWarning: FC;
export type OnSaveHandler = (data: object, formData: object, contexts: object, globalState: object) => Promise<object>;
export type OnSaveSuccessHandler = (data: object, form: FormApi, contexts: object, globalState: object, setGlobalState: Function) => void;
declare const DataListControl: FC<IDataListWithDataSourceProps>;
export default DataListControl;
