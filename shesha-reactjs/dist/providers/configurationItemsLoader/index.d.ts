import { FC, PropsWithChildren } from 'react';
import { IReferenceList } from '../../interfaces/referenceList';
import { PromisedValue } from '../../utils/promises';
import { IComponentSettings } from '../appConfigurator/models';
import { FormFullName, IFormDto } from '../form/models';
import { IClearFormCachePayload, IConfigurationItemsLoaderActionsContext, IConfigurationItemsLoaderStateContext, IGetComponentPayload, IGetFormPayload, IGetRefListPayload, IUpdateComponentPayload } from './contexts';
export interface IConfigurationItemsLoaderProviderProps {
}
declare const ConfigurationItemsLoaderProvider: FC<PropsWithChildren<IConfigurationItemsLoaderProviderProps>>;
declare function useConfigurationItemsLoaderState(require: boolean): IConfigurationItemsLoaderStateContext;
declare function useConfigurationItemsLoaderActions(require: boolean): IConfigurationItemsLoaderActionsContext;
declare function useConfigurationItemsLoader(require?: boolean): {
    activeProvider?: string;
    getCachedForm: (payload: IGetFormPayload) => Promise<IFormDto>;
    getForm: (payload: IGetFormPayload) => Promise<IFormDto>;
    getRefList: (payload: IGetRefListPayload) => PromisedValue<IReferenceList>;
    getComponent: (payload: IGetComponentPayload) => PromisedValue<IComponentSettings>;
    updateComponent: (payload: IUpdateComponentPayload) => Promise<void>;
    clearFormCache: (payload: IClearFormCachePayload) => void;
    getEntityFormId: (className: string, formType: string) => Promise<FormFullName>;
};
export { ConfigurationItemsLoaderProvider, useConfigurationItemsLoader, useConfigurationItemsLoaderActions, useConfigurationItemsLoaderState, };
