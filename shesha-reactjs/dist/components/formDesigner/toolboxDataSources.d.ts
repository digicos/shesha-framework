import { FC } from 'react';
import { IDataSource } from '../../providers/formDesigner/models';
export interface IToolboxDataSourcesProps {
    dataSources: IDataSource[];
}
export declare const ToolboxDataSources: FC<IToolboxDataSourcesProps>;
export default ToolboxDataSources;
