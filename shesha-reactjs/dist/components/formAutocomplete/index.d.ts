import { FC } from 'react';
import { FormIdentifier } from '../../providers/form/models';
export interface IFormAutocompleteRuntimeProps {
    value?: FormIdentifier;
    onChange?: (value?: FormIdentifier) => void;
    readOnly?: boolean;
    maxResultCount?: number;
    convertToFullId?: boolean;
}
export declare const FormAutocomplete: FC<IFormAutocompleteRuntimeProps>;
export default FormAutocomplete;
