import { IFlatComponentsStructure } from '../../interfaces';
import { FC } from 'react';
import { ColumnInstance, HeaderGroup } from 'react-table';
export interface INewRowEditorProps {
    columns: ColumnInstance[];
    headerGroups: HeaderGroup<any>[];
    creater: (data: any) => Promise<any>;
    onInitData?: () => Promise<object>;
    components?: IFlatComponentsStructure;
}
export declare const NewTableRowEditor: FC<INewRowEditorProps>;
export default NewTableRowEditor;
