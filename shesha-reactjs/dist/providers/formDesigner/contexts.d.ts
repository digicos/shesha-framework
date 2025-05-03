import { MutableRefObject } from 'react';
import { IAsyncValidationError, IFormValidationErrors, ISettingsFormFactory, IToolboxComponent, IToolboxComponentGroup } from '../../interfaces';
import { IPropertyMetadata } from '../../interfaces/metadata';
import { StateWithHistory } from '../../utils/undoable';
import { IConfigurableFormComponent, IFlatComponentsStructure, IFormSettings } from '../form/models';
import { IDataSource } from '../formDesigner/models';
export interface IFormDesignerStateContext {
    toolboxComponentGroups: IToolboxComponentGroup[];
    validationErrors?: IFormValidationErrors;
    selectedComponentId?: string;
    selectedComponentRef?: MutableRefObject<any>;
    isDragging: boolean;
    hasDragged: boolean;
    dataSources: IDataSource[];
    isDebug: boolean;
    readOnly: boolean;
    settingsPanelRef?: MutableRefObject<any>;
    formSettings: IFormSettings;
    formFlatMarkup: IFlatComponentsStructure;
}
export interface IUndoableFormDesignerStateContext extends StateWithHistory<IFormDesignerStateContext> {
}
export interface AddComponentPayloadBase {
    index: number;
    containerId: string;
}
export interface IComponentAddPayload extends AddComponentPayloadBase {
    componentType: string;
}
export interface IComponentAddFromTemplatePayload extends AddComponentPayloadBase {
}
export interface IAddDataPropertyPayload {
    propertyMetadata: IPropertyMetadata;
    index: number;
    containerId: string;
}
export interface IUpdateChildComponentsPayload {
    containerId: string;
    componentIds: string[];
}
export interface IComponentDeletePayload {
    componentId: string;
}
export interface IComponentDuplicatePayload {
    componentId: string;
}
export interface IComponentUpdatePayload {
    componentId: string;
    settings: IConfigurableFormComponent;
}
export interface IComponentUpdateSettingsValidationPayload {
    componentId: string;
    validationErrors: IAsyncValidationError[];
}
export interface ISetSelectedComponentPayload {
    id: string;
    componentRef?: MutableRefObject<any>;
}
export interface IFormDesignerActionsContext {
    deleteComponent: (payload: IComponentDeletePayload) => void;
    duplicateComponent: (payload: IComponentDuplicatePayload) => void;
    updateComponent: (payload: IComponentUpdatePayload) => void;
    addComponent: (payload: IComponentAddPayload) => void;
    addComponentsFromTemplate: (payload: IComponentAddFromTemplatePayload) => void;
    updateChildComponents: (payload: IUpdateChildComponentsPayload) => void;
    startDraggingNewItem: () => void;
    endDraggingNewItem: () => void;
    startDragging: () => void;
    endDragging: () => void;
    setSelectedComponent: (id: string, componentRef?: MutableRefObject<any>) => void;
    setValidationErrors: (payload: IFormValidationErrors) => void;
    setDebugMode: (isDebug: boolean) => void;
    updateFormSettings: (settings: IFormSettings) => void;
    getToolboxComponent: (type: string) => IToolboxComponent;
    addDataProperty: (payload: IAddDataPropertyPayload) => void;
    addDataSource: (dataSource: IDataSource) => void;
    removeDataSource: (id: string) => void;
    setActiveDataSource: (id: string) => void;
    setReadOnly: (value: boolean) => void;
    getCachedComponentEditor: (type: string, evaluator: () => ISettingsFormFactory) => ISettingsFormFactory;
    undo: () => void;
    redo: () => void;
}
/** Form initial state */
export declare const FORM_DESIGNER_CONTEXT_INITIAL_STATE: IFormDesignerStateContext;
export declare const UndoableFormDesignerStateContext: import("react").Context<IUndoableFormDesignerStateContext>;
export interface ConfigurableFormInstance extends IFormDesignerActionsContext, IFormDesignerStateContext {
}
export declare const FormDesignerStateContext: import("react").Context<IFormDesignerStateContext>;
export declare const FormDesignerActionsContext: import("react").Context<IFormDesignerActionsContext>;
export declare const FormDesignerStateConsumer: import("react").Consumer<IFormDesignerStateContext>;
