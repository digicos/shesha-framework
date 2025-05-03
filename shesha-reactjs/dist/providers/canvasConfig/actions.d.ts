import { ICanvasWidthProps } from './contexts';
export declare enum CanvasConfigActionEnums {
    SetCanvasWidth = "SET_FORM_WIDTH",
    SetCanvasZoom = "SET_FORM_ZOOM"
}
export declare const setCanvasZoomAction: import("redux-actions").ActionFunction1<number, import("redux-actions").Action<number>>;
export declare const setCanvasWidthAction: import("redux-actions").ActionFunction1<ICanvasWidthProps, import("redux-actions").Action<ICanvasWidthProps>>;
