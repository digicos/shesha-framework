import { Widgets } from '@react-awesome-query-builder/antd';
import { IModelMetadata } from '../../interfaces/metadata';
import { IProperty } from './models';
export interface IQueryBuilderStateContext {
    fields: IProperty[];
    id?: string;
    customWidgets?: Widgets;
}
export interface IQueryBuilderActionsContext {
    setFields: (fields: IProperty[]) => void;
    fetchFields: (fieldNames: string[]) => void;
    fetchContainer: (containerPath: string) => Promise<IModelMetadata>;
}
export declare const QUERY_BUILDER_CONTEXT_INITIAL_STATE: IQueryBuilderStateContext;
export declare const QueryBuilderStateContext: import("react").Context<IQueryBuilderStateContext>;
export declare const QueryBuilderActionsContext: import("react").Context<IQueryBuilderActionsContext>;
