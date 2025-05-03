import { InputProps } from 'antd';
import { FC } from 'react';
export interface IAutocompleteTagGroupProps extends Omit<InputProps, 'value' | 'onChange'> {
    value?: string[];
    defaultValue?: string;
    autocompleteUrl: string;
    onChange?: (values?: string[]) => void;
}
export declare const AutocompleteTagGroup: FC<IAutocompleteTagGroupProps>;
export default AutocompleteTagGroup;
