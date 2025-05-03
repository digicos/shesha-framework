import { FC, MutableRefObject, PropsWithChildren } from "react";
import { IShaFormInstance } from '../store/interfaces';
export interface IShaFormProviderProps {
    shaForm: IShaFormInstance;
}
declare const FormProviderWithDelayedUpdates: FC<PropsWithChildren<IShaFormProviderProps>>;
declare const useShaFormRef: () => MutableRefObject<IShaFormInstance>;
declare const useShaFormInstance: (required?: boolean) => IShaFormInstance;
export { FormProviderWithDelayedUpdates as ShaFormProvider, useShaFormInstance, useShaFormRef, };
