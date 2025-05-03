import { FormInstance } from 'antd';
import { FC, MutableRefObject, PropsWithChildren } from 'react';
import { ConfigurableFormInstance, IFormActionsContext, IFormStateContext } from './contexts';
import { FormMode, IFormActions, IFormSections, IFormSettings } from './models';
import { FormFlatMarkupProvider, useChildComponentIds, useChildComponents, useComponentModel, useFormMarkup } from './providers/formMarkupProvider';
import { IShaFormInstance } from './store/interfaces';
type ShaFormCompoundedComponent = {
    useMarkup: typeof useFormMarkup;
    useComponentModel: typeof useComponentModel;
    useChildComponents: typeof useChildComponents;
    useChildComponentIds: typeof useChildComponentIds;
    MarkupProvider: typeof FormFlatMarkupProvider;
};
declare const ShaForm: ShaFormCompoundedComponent;
export interface IFormProviderProps {
    name: string;
    formSettings: IFormSettings;
    mode: FormMode;
    form?: FormInstance<any>;
    actions?: IFormActions;
    sections?: IFormSections;
    formRef?: MutableRefObject<Partial<ConfigurableFormInstance> | null>;
    /**
     * If true, form should register configurable actions. Should be enabled for main forms only
     */
    isActionsOwner: boolean;
    propertyFilter?: (name: string) => boolean;
    shaForm: IShaFormInstance;
}
declare const FormProvider: FC<PropsWithChildren<IFormProviderProps>>;
declare const useFormState: (required?: boolean) => IFormStateContext;
declare const useFormActions: (require?: boolean) => IFormActionsContext;
declare const useForm: (require?: boolean) => ConfigurableFormInstance;
declare const useIsDrawingForm: () => boolean;
export { ShaForm, FormProvider, useForm, useFormActions, useFormState, useIsDrawingForm, };
