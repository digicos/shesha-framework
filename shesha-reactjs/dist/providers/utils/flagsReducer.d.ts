import { IFlagsState } from '../../interfaces';
export declare const IS_IN_PROGRESS_FLAG = "_REQUEST";
export declare const SUCCESS_FLAG = "_SUCCESS";
export declare const ERROR_FLAG = "_ERROR";
export declare const ACTIONED_FLAG = "_ACTION";
export declare const FLAGS_INITIAL_STATE: IFlagsState<any, any, any, any>;
declare const flagsReducer: <T extends IFlagsState<any, any, any, any> = unknown>(state: T, { type, payload }: ReduxActions.Action<IFlagsState<any, any, any, any>>) => T;
export default flagsReducer;
