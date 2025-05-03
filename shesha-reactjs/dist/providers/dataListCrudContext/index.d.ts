import { FC, PropsWithChildren } from 'react';
import { RowDataInitializer } from '../../components/reactTable/interfaces';
import { IFlatComponentsStructure, IFormSettings } from '../../providers/form/models';
import { ICrudContext } from '../crudContext/contexts';
import { CrudMode } from '../crudContext/models';
export type DataProcessor = (data: any) => Promise<any>;
export interface ICrudProviderProps {
    id?: string;
    isNewObject: boolean;
    allowEdit: boolean;
    allowDelete: boolean;
    mode?: CrudMode;
    allowChangeMode: boolean;
    data: object | RowDataInitializer;
    updater?: DataProcessor;
    creater?: DataProcessor;
    deleter?: () => Promise<any>;
    onSave?: DataProcessor;
    autoSave?: boolean;
    formFlatMarkup?: IFlatComponentsStructure;
    formSettings?: IFormSettings;
    itemListId?: string;
}
declare const DataListCrudProvider: FC<PropsWithChildren<ICrudProviderProps>>;
declare function useDataListCrud(require?: boolean): ICrudContext;
export { DataListCrudProvider, useDataListCrud };
