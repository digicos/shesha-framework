import { FC } from 'react';
export interface IPropertyAutocompleteProps {
    onChange?: (value: string[]) => void;
    value?: string[];
    readOnly?: boolean;
}
declare const PermissionAutocomplete: FC<IPropertyAutocompleteProps>;
export default PermissionAutocomplete;
