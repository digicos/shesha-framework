import { PropTypes } from 'react-places-autocomplete';
import { IEntityReferenceDto } from '../../interfaces';
import { IAddressCompomentProps } from './models';
export declare const EXPOSED_VARIABLES: {
    id: string;
    name: string;
    description: string;
    type: string;
}[];
export declare const getAddressValue: (value: string | IEntityReferenceDto) => string;
export declare const getSearchOptions: (model: IAddressCompomentProps) => PropTypes["searchOptions"];
export declare const loadGooglePlaces: (googleMapsApiKey: string, callback: Function) => void;
