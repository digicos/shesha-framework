import { Reducer } from 'react';
/**
 * @function Thunk
 * @param {Dispatch} dispatch
 * @param {Function} getState
 * @returns {void|*}
 */
/**
 * @function Dispatch
 * @param {Object|Thunk} action
 * @returns {void|*}
 */
export interface ThunkDispatch<S, A> {
    <Action extends (dispatch: ThunkDispatch<S, A>, getState: () => S) => unknown>(action: Action): ReturnType<Action>;
    (value: A): void;
}
/**
 * Augments React's useReducer() hook so that the action
 * dispatcher supports thunks.
 *
 * @param {Function} reducer
 * @param {*} initialArg
 * @param {Function} [init]
 * @returns {[*, Dispatch]}
 */
export declare function useThunkReducer<S, A>(reducer: Reducer<S, A>, initialArg: S, init?: (s: S) => S): [S, ThunkDispatch<S, A>];
export default useThunkReducer;
