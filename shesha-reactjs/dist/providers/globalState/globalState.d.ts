import { IAnyObject } from "../../interfaces";
import { GlobalStateRerenderTrigger, IGlobalState, ISetStatePayload } from "./contexts";
export declare class GlobalState implements IGlobalState {
    #private;
    constructor(forceUpdate: GlobalStateRerenderTrigger);
    get globalState(): IAnyObject;
    setState: (payload: ISetStatePayload) => void;
    clearState: (stateKey: string) => void;
    getStateByKey: (key: string) => IAnyObject;
}
