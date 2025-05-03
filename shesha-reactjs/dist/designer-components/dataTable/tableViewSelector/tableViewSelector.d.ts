import { FC, MutableRefObject } from 'react';
import { ITableViewSelectorComponentProps } from './models';
interface ITableViewSelectorProps extends ITableViewSelectorComponentProps {
    componentRef: MutableRefObject<any>;
}
export declare const TableViewSelector: FC<ITableViewSelectorProps>;
export {};
