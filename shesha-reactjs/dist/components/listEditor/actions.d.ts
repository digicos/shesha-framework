import { ListMode } from './models';
export declare enum ListActionEnums {
    SwitchMode = "SWITCH_MODE"
}
export interface ISwitchModeActionPayload {
    mode: ListMode;
    allowChangeMode: boolean;
}
export declare const switchModeAction: import("redux-actions").ActionFunction1<ISwitchModeActionPayload, import("redux-actions").Action<ISwitchModeActionPayload>>;
