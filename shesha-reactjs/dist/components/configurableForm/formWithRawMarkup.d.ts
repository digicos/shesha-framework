import { FC } from 'react';
import { IConfigurableFormRuntimeProps, SheshaFormProps } from './models';
import { FormMarkup } from '../../interfaces';
export type IFormWithRawMarkupProps = IConfigurableFormRuntimeProps & {
    markup: FormMarkup;
    cacheKey?: string;
    onMarkupUpdated?: () => void;
    isSettingsForm?: boolean;
} & SheshaFormProps;
export declare const FormWithRawMarkup: FC<IFormWithRawMarkupProps>;
