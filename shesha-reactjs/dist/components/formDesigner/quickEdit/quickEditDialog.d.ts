import { FC } from 'react';
import { FormIdentifier } from '../../../interfaces';
export interface IQuickEditDialogProps {
    open: boolean;
    onCancel: () => void;
    onUpdated: () => void;
    formId: FormIdentifier;
}
export declare const QuickEditDialog: FC<IQuickEditDialogProps>;
