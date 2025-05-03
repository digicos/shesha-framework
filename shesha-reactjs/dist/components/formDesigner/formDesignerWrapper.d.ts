import { FC, PropsWithChildren } from 'react';
import { FormIdentifier } from '../../providers/form/models';
export interface IFormProviderWrapperProps extends PropsWithChildren {
    formId: FormIdentifier;
}
export declare const FormProviderWrapper: FC<IFormProviderWrapperProps>;
