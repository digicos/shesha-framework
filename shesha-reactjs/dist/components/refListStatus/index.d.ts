import { CSSProperties, FC } from 'react';
import { IReferenceListIdentifier } from '../../interfaces/referenceList';
export interface IRefListStatusProps {
    referenceListId: IReferenceListIdentifier;
    showIcon?: boolean;
    solidBackground?: boolean;
    showReflistName?: boolean;
    style?: CSSProperties;
    value?: any;
}
export declare const RefListStatus: FC<IRefListStatusProps>;
