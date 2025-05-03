import React from 'react';
import { IEntityReferenceDto } from '../../interfaces';
import { IAutocompleteProps, ISelectOption, AutocompleteDataSourceType, CustomLabeledValue } from './models';
/**
 * A component for working with dynamic autocomplete
 */
declare const Autocomplete: <TValue>(props: IAutocompleteProps<TValue>) => React.JSX.Element;
export type IDtoType = IEntityReferenceDto | IEntityReferenceDto[];
export declare const EntityDtoAutocomplete: (props: IAutocompleteProps<IDtoType>) => React.JSX.Element;
export type IRawAutocompleteType = string | IEntityReferenceDto;
export declare const RawAutocomplete: (props: IAutocompleteProps<IRawAutocompleteType>) => React.JSX.Element;
type InternalAutocompleteType = typeof Autocomplete;
interface IInternalAutocompleteInterface extends InternalAutocompleteType {
    Raw: typeof RawAutocomplete;
    EntityDto: typeof EntityDtoAutocomplete;
}
declare const AutocompleteInterface: IInternalAutocompleteInterface;
export { AutocompleteInterface as Autocomplete, type IAutocompleteProps, type ISelectOption, type AutocompleteDataSourceType, type CustomLabeledValue };
