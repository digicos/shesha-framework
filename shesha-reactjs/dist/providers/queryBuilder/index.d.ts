import { FC, PropsWithChildren } from 'react';
import { IHasQueryBuilderConfig, IProperty, IPropertyMetadataWithQBSettings, propertyHasQBConfig } from './models';
import { useMetadataFields } from './utils';
import { IModelMetadata } from '../../interfaces/metadata';
import { Widgets } from '@react-awesome-query-builder/antd';
export interface IQueryBuilderProviderProps {
    metadata: IModelMetadata;
    id?: string;
    customWidgets?: Widgets;
}
declare const QueryBuilderProvider: FC<PropsWithChildren<IQueryBuilderProviderProps>>;
declare function useQueryBuilderState(requireBuilder?: boolean): import("./contexts").IQueryBuilderStateContext;
declare function useQueryBuilderActions(requireBuilder?: boolean): import("./contexts").IQueryBuilderActionsContext;
declare function useQueryBuilder(requireBuilder?: boolean): {
    fields: IProperty[];
    id?: string;
    customWidgets?: Widgets;
    setFields: (fields: IProperty[]) => void;
    fetchFields: (fieldNames: string[]) => void;
    fetchContainer: (containerPath: string) => Promise<IModelMetadata>;
};
export { QueryBuilderProvider, useQueryBuilderState, useQueryBuilderActions, useQueryBuilder, useMetadataFields, type IHasQueryBuilderConfig, propertyHasQBConfig, type IPropertyMetadataWithQBSettings, };
