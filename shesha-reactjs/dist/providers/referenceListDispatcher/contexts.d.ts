import { IReferenceList, IReferenceListItem } from '../../interfaces/referenceList';
import { PromisedValue } from '../../utils/promises';
import { IReferenceListIdentifier } from '../../interfaces/referenceList';
export interface IReferenceListDispatcherStateContext {
    activeProvider?: string;
}
export interface IGetReferenceListPayload {
    refListId: IReferenceListIdentifier;
}
export interface IReferenceListDispatcherActionsContext {
    getReferenceList: (payload: IGetReferenceListPayload) => PromisedValue<IReferenceList>;
    getReferenceListItem: (moduleName: string, name: string, itemValue?: number) => Promise<IReferenceListItem>;
}
/** initial state */
export declare const REFERENCELIST_DISPATCHER_CONTEXT_INITIAL_STATE: IReferenceListDispatcherStateContext;
export declare const ReferenceListDispatcherStateContext: import("react").Context<IReferenceListDispatcherStateContext>;
export declare const ReferenceListDispatcherActionsContext: import("react").Context<IReferenceListDispatcherActionsContext>;
