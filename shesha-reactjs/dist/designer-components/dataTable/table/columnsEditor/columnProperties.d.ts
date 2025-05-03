import { FC } from 'react';
import { ColumnsItemProps } from '../../../../providers/datatableColumnsConfigurator/models';
import { IMetadataContext } from '../../../../providers/metadata/contexts';
export interface IColumnPropertiesProps {
    item?: ColumnsItemProps;
    onChange?: (item: ColumnsItemProps) => void;
    readOnly: boolean;
    metadata?: IMetadataContext;
}
export declare const ColumnProperties: FC<IColumnPropertiesProps>;
