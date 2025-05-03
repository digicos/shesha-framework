import { MessageInstance } from 'antd/es/message/interface';
import { AxiosInstance } from 'axios';
import { DOMAttributes } from 'react';
import { IAnyObject, IConfigurableFormComponent } from '../../../interfaces';
import { IGooglePlacesAutocompleteProps } from '../../../components';
import { ISetStatePayload } from '../../../providers/globalState/contexts';
import { CustomLabeledValue } from '../../../components/autocomplete';
import { IAddressAndCoords } from '../../../components/googlePlacesAutocomplete';
import { IOpenCageResponse } from '../../googlePlacesAutocomplete/models';
import { FormApi } from '../../../providers/form/formApi';
type SetGlobalStateFunc = (payload: ISetStatePayload) => void;
export interface ICustomEventHandler {
    model: IConfigurableFormComponent;
    form: FormApi;
    formData: any;
    globalState: IAnyObject;
    http: AxiosInstance;
    message: MessageInstance;
    moment: object;
    setGlobalState: (payload: ISetStatePayload) => void;
}
export interface ICustomAddressEventHandler extends ICustomEventHandler {
    onChange: Function;
    onSelect: (selected: IAddressAndCoords) => Promise<IOpenCageResponse | IAddressAndCoords>;
}
export declare const onCustomEventsHandler: <FormCustomEvent = any>(event: FormCustomEvent, customEventAction: string, form: FormApi, formData: any, globalState: IAnyObject, http: AxiosInstance, message: MessageInstance, moment: object, setGlobalState: SetGlobalStateFunc) => any;
type EventHandlerAttributes<T = any> = Pick<DOMAttributes<T>, 'onBlur' | 'onChange' | 'onFocus' | 'onClick'>;
export declare const customEventHandler: <T = any>({ model, form, formData, globalState, http, message, moment, setGlobalState, }: ICustomEventHandler) => EventHandlerAttributes<T>;
export declare const customDateEventHandler: ({ model, form, formData, globalState, http, message, moment, setGlobalState, }: ICustomEventHandler) => {
    onChange: (value: any | null, dateString: string | [string, string]) => any;
};
export declare const customTimeEventHandler: ({ model, form, formData, globalState, http, message, moment, setGlobalState, }: ICustomEventHandler) => {
    onChange: (value: any | null, timeString: string | [string, string]) => any;
};
export declare const customDropDownEventHandler: <T = any>({ model, form, formData, globalState, http, message, moment, setGlobalState, }: ICustomEventHandler) => {
    onChange: (value: CustomLabeledValue<T>, option: any) => any;
};
export declare const customInputNumberEventHandler: ({ model, form, formData, globalState, http, message, moment, setGlobalState, }: ICustomEventHandler, changeEvent: Function) => {
    onChange: (value: any) => any;
};
export declare const customRateEventHandler: ({ model, form, formData, globalState, http, message, moment, setGlobalState, }: ICustomEventHandler) => {
    onChange: (value: number) => any;
};
export declare const customAddressEventHandler: ({ model, form, formData, globalState, http, message, moment, setGlobalState, onChange: onChangeCustom, onSelect, }: ICustomAddressEventHandler) => IGooglePlacesAutocompleteProps;
export declare const isValidGuid: (input: string) => boolean;
export {};
