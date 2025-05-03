import { FC } from 'react';
import { ColumnsItemProps } from '../../../../providers/datatableColumnsConfigurator/models';
export interface IColumnsConfiguratorProps {
    readOnly: boolean;
    value: ColumnsItemProps[];
    onChange: (newValue: ColumnsItemProps[]) => void;
}
export declare const ColumnsConfigurator: FC<IColumnsConfiguratorProps>;
export default ColumnsConfigurator;
