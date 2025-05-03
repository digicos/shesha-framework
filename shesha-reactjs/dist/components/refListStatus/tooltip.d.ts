import { FC, PropsWithChildren } from 'react';
import { ReferenceListItemDto } from '../../apis/referenceList';
interface IToolTipProps {
    currentStatus: ReferenceListItemDto;
    showReflistName: boolean;
}
export declare const DescriptionTooltip: FC<PropsWithChildren<IToolTipProps>>;
export {};
