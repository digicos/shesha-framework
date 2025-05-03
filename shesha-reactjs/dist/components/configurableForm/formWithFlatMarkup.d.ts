import { IFlatComponentsStructure, IFormActions, IFormSections, IFormSettings, IPersistedFormProps } from '../../providers/form/models';
import React, { FC } from 'react';
import { IConfigurableFormRuntimeProps } from './models';
export type IFormWithFlatMarkupProps = IConfigurableFormRuntimeProps & {
    formFlatMarkup: IFlatComponentsStructure;
    formSettings: IFormSettings;
    persistedFormProps?: IPersistedFormProps;
    onMarkupUpdated?: () => void;
    actions?: IFormActions;
    sections?: IFormSections;
};
export declare const FormWithFlatMarkup: FC<IFormWithFlatMarkupProps>;
export declare const FormWithFlatMarkupMemo: React.NamedExoticComponent<IFormWithFlatMarkupProps>;
