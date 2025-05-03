import { FC, PropsWithChildren } from 'react';
export interface ICanvasProviderProps {
}
declare const CanvasProvider: FC<PropsWithChildren<ICanvasProviderProps>>;
declare function useCanvasConfigState(require: boolean): import("./contexts").ICanvasConfigStateContext;
declare function useCanvasConfigActions(require: boolean): import("./contexts").ICanvasConfigActionsContext;
declare function useCanvasConfig(require?: boolean): {
    width?: number;
    zoom?: number;
    activeDevice?: import("./contexts").IDeviceTypes;
    isInProgress?: {
        fetchFileInfo?: boolean;
    };
    succeeded?: {
        fetchFileInfo?: boolean;
    };
    error?: {
        fetchFileInfo?: string | boolean | import("../..").IErrorInfo;
    };
    actioned?: {
        __DEFAULT__?: boolean;
    };
    setCanvasWidth: (width: number, deviceType: string) => void;
    setCanvasZoom: (zoom: number) => void;
    setIsInProgressFlag: (key: {
        fetchFileInfo?: boolean;
    }) => void;
    setSucceededFlag: (key: {
        fetchFileInfo?: boolean;
    }) => void;
    setFailedFlag: (key: {
        fetchFileInfo?: boolean;
    }) => void;
    setActionedFlag: (key: {
        __DEFAULT__?: boolean;
    }) => void;
    resetIsInProgressFlag: () => void;
    resetSucceededFlag: () => void;
    resetFailedFlag: () => void;
    resetActionedFlag: () => void;
    resetAllFlag: () => void;
};
export { CanvasProvider, useCanvasConfig, useCanvasConfigActions, // note: to be removed
useCanvasConfigState };
