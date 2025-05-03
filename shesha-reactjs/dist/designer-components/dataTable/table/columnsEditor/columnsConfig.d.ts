import { FC } from 'react';
import { ColumnsItemProps } from '../../../../providers/datatableColumnsConfigurator/models';
export interface IColumnsConfigProps {
    value?: ColumnsItemProps[];
    onChange?: (value: ColumnsItemProps[]) => void;
    readOnly?: boolean;
}
export declare const ColumnsConfig: FC<IColumnsConfigProps>;
