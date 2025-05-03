import { FC, PropsWithChildren } from 'react';
import { IReferenceList, IReferenceListItem } from '../../interfaces/referenceList';
import { PromisedValue } from '../../utils/promises';
import { IGetReferenceListPayload } from './contexts';
import { ILoadingState } from './models';
import { IReferenceListIdentifier } from '../../interfaces/referenceList';
export interface IReferenceListDispatcherProviderProps {
}
declare const ReferenceListDispatcherProvider: FC<PropsWithChildren<IReferenceListDispatcherProviderProps>>;
declare function useReferenceListDispatcher(require?: boolean): {
    activeProvider?: string;
    getReferenceList: (payload: IGetReferenceListPayload) => PromisedValue<IReferenceList>;
    getReferenceListItem: (moduleName: string, name: string, itemValue?: number) => Promise<IReferenceListItem>;
};
declare const useReferenceList: (refListId: IReferenceListIdentifier) => ILoadingState<IReferenceList>;
declare const useReferenceListItem: (moduleName: string, listName: string, itemValue?: number) => ILoadingState<IReferenceListItem>;
export { ReferenceListDispatcherProvider, useReferenceList, useReferenceListDispatcher, useReferenceListItem };
