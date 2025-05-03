import { CSSProperties, FC } from 'react';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { IPropertyMetadata } from '../../interfaces/metadata';
export interface IPropertyAutocompleteProps {
    id?: string;
    value?: string | string[];
    style?: CSSProperties;
    dropdownStyle?: CSSProperties;
    size?: SizeType;
    onChange?: (value: string | string[]) => void;
    onSelect?: (value: string | string[], selectedProperty: IPropertyMetadata) => void;
    onPropertiesLoaded?: (properties: IPropertyMetadata[], prefix: string) => void;
    mode?: 'single' | 'multiple' | 'tags';
    autoFillProps?: boolean;
    readOnly?: boolean;
}
export declare const PropertyAutocomplete: FC<IPropertyAutocompleteProps>;
export default PropertyAutocomplete;
