import { CSSProperties, FC } from 'react';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { IApiEndpoint } from '../../interfaces';
export interface IHttpVerb {
    id: string;
    label: string;
    value: string;
}
export type EndpointSelectionMode = 'url' | 'endpoint';
export type EndpointsAutocompleteValue = string | IApiEndpoint;
export interface IEndpointsAutocompleteProps {
    value?: EndpointsAutocompleteValue;
    onChange?: (value: EndpointsAutocompleteValue) => void;
    dropdownStyle?: CSSProperties;
    size?: SizeType;
    readOnly?: boolean;
    httpVerb?: string;
    prefix?: string;
    suffix?: string;
    availableHttpVerbs?: IHttpVerb[];
    mode?: EndpointSelectionMode;
}
export interface VerbSelectorProps {
    verbs?: IHttpVerb[];
    value?: string;
    onChange: (newValue?: string) => void;
}
export declare const VerbSelector: FC<VerbSelectorProps>;
export declare const EndpointsAutocomplete: FC<IEndpointsAutocompleteProps>;
