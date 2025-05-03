import { FC, CSSProperties } from 'react';
import { PropTypes } from 'react-places-autocomplete';
import { LatLngPolygon, PointPolygon } from '../../utils/googleMaps';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
export interface IAddressAndCoords {
    address: string;
    lat?: number;
    lng?: number;
}
export interface IGooglePlacesAutocompleteProps {
    disableGoogleEvent?: (value: string) => boolean;
    debounce?: number;
    externalLoader?: boolean;
    isInvalid?: boolean;
    onGeocodeChange?: (payload?: IAddressAndCoords) => void;
    onChange?: (payload?: string) => void;
    value?: string;
    selectedValue?: string;
    help?: string;
    placeholder?: string;
    prefix?: string;
    label?: string;
    disabled?: boolean;
    ignoreText?: string;
    tabIndex?: number;
    biasedCoordinates?: LatLngPolygon | PointPolygon;
    style?: CSSProperties;
    size?: SizeType;
    searchOptions?: PropTypes['searchOptions'];
}
declare const GooglePlacesAutocomplete: FC<IGooglePlacesAutocompleteProps>;
export default GooglePlacesAutocomplete;
