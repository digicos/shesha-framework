import { FC } from 'react';
import { IReferenceListIdentifier } from '../../interfaces/referenceList';
export interface IReferenceListAutocompleteRuntimeProps {
    value?: IReferenceListIdentifier;
    onChange?: (value?: IReferenceListIdentifier) => void;
    readOnly?: boolean;
    maxResultCount?: number;
}
export declare const ReferenceListAutocomplete: FC<IReferenceListAutocompleteRuntimeProps>;
export default ReferenceListAutocomplete;
