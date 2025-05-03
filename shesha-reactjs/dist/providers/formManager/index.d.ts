import { FC, PropsWithChildren } from 'react';
import { IFormManagerActionsContext } from './contexts';
import { useFormById, useFormByMarkup } from './hooks';
export interface IFormManagerProps {
}
/**
 * FormManager. Component responsible for preparation of forms and caching.
 * Make all required preparation of the form markup including upgrade of components and conversion to a flat structure.
 */
export declare const FormManager: FC<PropsWithChildren<IFormManagerProps>>;
export declare const useFormManager: () => IFormManagerActionsContext;
export { useFormByMarkup, useFormById };
