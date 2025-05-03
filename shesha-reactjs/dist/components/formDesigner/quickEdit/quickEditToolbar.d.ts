import { FormConfigurationDto } from '../../../providers/form/api';
import { FC } from 'react';
export interface IQuickEditToolbarProps {
    onUpdated: () => void;
    onNewVersionCreated: (newVersion: FormConfigurationDto) => void;
}
export declare const QuickEditToolbar: FC<IQuickEditToolbarProps>;
