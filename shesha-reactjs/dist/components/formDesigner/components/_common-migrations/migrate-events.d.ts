import { IConfigurableActionConfiguration } from "../../../../interfaces/configurableAction";
export interface IHasDispatchEvent {
    eventName?: string;
    customEventNameToDispatch?: string;
    uniqueStateId?: string;
}
export declare const getDispatchEventReplacement: (eventCallerProps: IHasDispatchEvent) => IConfigurableActionConfiguration;
