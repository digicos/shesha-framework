import { EditMode } from '../../interfaces';
import { FC } from 'react';
export interface IReadOnlyModeSelectorProps {
    value?: boolean | EditMode;
    readOnly?: boolean;
    onChange?: (value: EditMode) => void;
}
declare const EditModeSelector: FC<IReadOnlyModeSelectorProps>;
export default EditModeSelector;
