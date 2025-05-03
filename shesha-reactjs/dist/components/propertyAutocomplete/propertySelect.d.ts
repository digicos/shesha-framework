import { CSSProperties, FC } from 'react';
import { IPropertyMetadata, ISpecification } from '../../interfaces/metadata';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
type PropertyPredicate = (property: IPropertyItem) => boolean;
export interface IPropertySelectProps {
    id?: string;
    value?: string;
    style?: CSSProperties;
    dropdownStyle?: CSSProperties;
    size?: SizeType;
    onChange?: (value: string) => void;
    onSelect?: (value: string, selectedProperty: IPropertyItem) => void;
    readOnly?: boolean;
    isPropertyVisible?: PropertyPredicate;
    isPropertySelectable?: PropertyPredicate;
}
export interface IQbItem {
    label: string;
    key: string;
    items?: IQbItem[];
}
export interface IHasPropertyType {
    itemType: 'property' | 'specification';
}
export type IPropertyItem = (IPropertyMetadata | ISpecification) & IHasPropertyType;
export declare const isPropertyMetadata: (item: IPropertyItem) => item is IPropertyMetadata & IHasPropertyType;
export declare const getPropertyItemIdentifier: (item: IPropertyItem, prefix: string) => string;
export declare const PropertySelect: FC<IPropertySelectProps>;
export default PropertySelect;
