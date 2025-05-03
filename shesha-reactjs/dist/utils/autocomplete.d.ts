import { EntityData } from '../interfaces/gql';
interface AutocompleteReturn {
    data: EntityData[];
    error: any;
    search: (term: string) => void;
    loading: boolean;
}
export type AutocompleteValueType = string | string[];
export interface IAutocompleteProps {
    entityType: string;
    filter?: string;
    maxResultCount?: number;
    displayProperty?: string;
    value?: AutocompleteValueType;
}
export declare const autocompleteValueIsEmpty: (value: any) => boolean;
/**
 * Generic entities autocomplete
 */
export declare const useEntityAutocomplete: (props: IAutocompleteProps) => AutocompleteReturn;
export {};
