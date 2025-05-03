import { IAnyObject } from './../../interfaces/anyObject';
export interface ISetStatePayload {
    data?: any;
    key?: string;
}
export interface IGlobalState {
    readonly globalState?: IAnyObject;
    setState: (payload: ISetStatePayload) => void;
    clearState: (stateKey: string) => void;
    getStateByKey?: (key: string) => IAnyObject;
}
export interface IGlobalStateContext {
    globalState: IGlobalState;
    state: any;
}
export declare const GlobalStateContext: import("react").Context<IGlobalStateContext>;
export type GlobalStateRerenderTrigger = () => void;
