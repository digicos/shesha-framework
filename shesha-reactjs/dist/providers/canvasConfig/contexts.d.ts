import { IFlagsSetters } from '../../interfaces/flagsSetters';
import { IFlagsState } from '../../interfaces/flagsState';
export type IFlagProgressFlags = 'fetchFileInfo';
export type IFlagSucceededFlags = 'fetchFileInfo';
export type IFlagErrorFlags = 'fetchFileInfo';
export type IFlagActionedFlags = '__DEFAULT__';
export type IDeviceTypes = 'desktop' | 'mobile' | 'custom';
export interface ICanvasConfigStateContext extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    width?: number;
    zoom?: number;
    activeDevice?: IDeviceTypes;
}
export interface ICanvasWidthProps {
    width: number;
    deviceType: string;
}
export interface ICanvasConfigActionsContext extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    setCanvasWidth: (width: number, deviceType: string) => void;
    setCanvasZoom: (zoom: number) => void;
}
export declare const CANVAS_CONFIG_CONTEXT_INITIAL_STATE: ICanvasConfigStateContext;
export declare const CanvasConfigStateContext: import("react").Context<ICanvasConfigStateContext>;
export declare const CanvasConfigActionsContext: import("react").Context<ICanvasConfigActionsContext>;
