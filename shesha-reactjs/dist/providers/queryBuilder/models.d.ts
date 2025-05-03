import { FieldOrGroup, FieldSettings } from '@react-awesome-query-builder/antd';
import { IPropertyMetadata } from '../../interfaces/metadata';
export interface CustomFieldSettings {
    typeShortAlias?: string;
    referenceListName?: string;
    referenceListModule?: string;
    allowInherited?: boolean;
    propertyMetadata: IPropertyMetadata;
}
export interface IProperty {
    label: string;
    propertyName: string;
    dataType: string;
    visible: boolean;
    fieldSettings?: FieldSettings | CustomFieldSettings;
    childProperties?: IProperty[];
    [key: string]: any;
}
export interface IHasQueryBuilderConfig extends IProperty {
    convert: (property: IProperty) => FieldOrGroup;
}
export declare const propertyHasQBConfig: (property: IProperty) => property is IHasQueryBuilderConfig;
export interface IHasCustomQBSettings {
    toQueryBuilderField: (defaultConverter: () => FieldOrGroup) => FieldOrGroup;
}
export interface IPropertyMetadataWithQBSettings extends IPropertyMetadata, IHasCustomQBSettings {
}
export interface IPropertyWithCustomQBSettings extends IProperty, IHasCustomQBSettings {
}
export declare const hasCustomQBSettings: (property: any) => property is IHasCustomQBSettings;
