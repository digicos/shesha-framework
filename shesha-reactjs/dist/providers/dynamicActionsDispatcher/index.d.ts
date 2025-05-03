import { FC, PropsWithChildren } from 'react';
import { IDynamicActionsDispatcherStateContext, IDynamicActionsDispatcherActionsContext, IDynamicActionsDispatcherFullInstance } from './contexts';
import { DynamicItemsEvaluationHook } from './models';
export interface IDynamicActionsDispatcherProviderProps {
}
declare const DynamicActionsDispatcherProvider: FC<PropsWithChildren<IDynamicActionsDispatcherProviderProps>>;
declare function useDynamicActionsDispatcherState(require: boolean): IDynamicActionsDispatcherStateContext;
declare function useDynamicActionsDispatcherActions(require: boolean): IDynamicActionsDispatcherActionsContext;
declare function useDynamicActionsDispatcher(require?: boolean): IDynamicActionsDispatcherFullInstance;
export { DynamicActionsDispatcherProvider, useDynamicActionsDispatcherState, useDynamicActionsDispatcherActions, useDynamicActionsDispatcher, type DynamicItemsEvaluationHook, };
