import { FC } from 'react';
import { IQueryBuilderProps } from './interfaces';
import { Config } from '@react-awesome-query-builder/antd';
interface IQueryBuilderContentProps extends IQueryBuilderProps {
    qbConfig: Config;
}
export declare const QueryBuilderContent: FC<IQueryBuilderContentProps>;
export {};
