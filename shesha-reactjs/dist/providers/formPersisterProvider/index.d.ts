import { FC, PropsWithChildren } from 'react';
import { FormIdentifier, FormMarkupWithSettings, IFormSettings } from '../form/models';
import { FormPersisterStateConsumer, ILoadFormPayload } from './contexts';
export interface IFormProviderProps {
    formId: FormIdentifier;
    skipCache?: boolean;
}
declare const FormPersisterProvider: FC<PropsWithChildren<IFormProviderProps>>;
declare function useFormPersister(require?: boolean): {
    formId: FormIdentifier;
    skipCache: boolean;
    formProps: import("../formManager/interfaces").UpToDateForm;
    loaded: boolean;
    loading: boolean;
    loadError?: import("../..").IErrorInfo;
    saving: boolean;
    saved: boolean;
    saveError?: import("../..").IErrorInfo;
    loadForm: (payload: ILoadFormPayload) => void;
    saveForm: (payload: FormMarkupWithSettings) => Promise<void>;
    updateFormSettings: (settings: IFormSettings) => void;
};
export { FormPersisterStateConsumer as FormPersisterConsumer, FormPersisterProvider, useFormPersister };
