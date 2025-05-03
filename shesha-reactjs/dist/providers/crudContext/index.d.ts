import { FC, PropsWithChildren } from 'react';
import { RowDataInitializer } from '../../components/reactTable/interfaces';
import { IFlatComponentsStructure, IFormSettings } from '../../providers/form/models';
import { ICrudContext } from './contexts';
import { CrudMode } from './models';
export type DataProcessor = (data: any) => Promise<any>;
export interface ICrudProviderProps {
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
    editorComponents?: IFlatComponentsStructure;
    displayComponents?: IFlatComponentsStructure;
    formSettings?: IFormSettings;
}
declare const CrudProvider: FC<PropsWithChildren<ICrudProviderProps>>;
declare function useCrud(require?: boolean): ICrudContext;
export { CrudProvider, useCrud };
