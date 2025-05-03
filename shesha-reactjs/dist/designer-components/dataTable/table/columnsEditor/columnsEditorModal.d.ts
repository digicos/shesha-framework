import { FC } from 'react';
import { ColumnsItemProps } from '../../../../providers/datatableColumnsConfigurator/models';
export interface IColumnsEditorModal {
    readOnly: boolean;
    visible: boolean;
    hideModal: () => void;
    value?: ColumnsItemProps[];
    onChange?: any;
}
export declare const ColumnsEditorModal: FC<IColumnsEditorModal>;
