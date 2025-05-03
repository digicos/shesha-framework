import { FC, PropsWithChildren } from 'react';
import { IFlatComponentsStructure, IFormSettings } from '../form/models';
import { IFormDesignerActionsContext, IFormDesignerStateContext } from './contexts';
export interface IFormDesignerProviderProps {
    flatMarkup: IFlatComponentsStructure;
    formSettings: IFormSettings;
    readOnly: boolean;
}
declare const FormDesignerProvider: FC<PropsWithChildren<IFormDesignerProviderProps>>;
declare function useFormDesignerState(require?: boolean): IFormDesignerStateContext;
declare function useFormDesignerActions(require?: boolean): IFormDesignerActionsContext;
declare function useFormDesignerUndoableState(require?: boolean): {
    canUndo: boolean;
    canRedo: boolean;
};
export { FormDesignerProvider, useFormDesignerUndoableState, useFormDesignerActions, useFormDesignerState };
