import { FormIdentifier } from '..';
import { IToolboxComponent, IToolboxComponentGroup, IToolboxComponents } from '../../interfaces';
export declare const useFormDesignerComponentGroups: () => IToolboxComponentGroup[];
export declare const toolbarGroupsToComponents: (availableComponents: IToolboxComponentGroup[]) => IToolboxComponents;
export declare const useFormDesignerComponents: () => IToolboxComponents;
export type FormDesignerComponentGetter = (type: string) => IToolboxComponent;
export declare const useFormDesignerComponentGetter: () => FormDesignerComponentGetter;
export declare const useFormDesignerUrl: (formId: FormIdentifier) => string;
