import { IFormValidationErrors, IToolboxComponentGroup } from '../../interfaces';
import { IFlatComponentsStructure, IFormSettings } from '../form/models';
import { IDataSource } from '../formDesigner/models';
import { IAddDataPropertyPayload, IComponentAddFromTemplatePayload, IComponentAddPayload, IComponentDeletePayload, IComponentDuplicatePayload, IComponentUpdatePayload, IComponentUpdateSettingsValidationPayload, ISetSelectedComponentPayload, IUpdateChildComponentsPayload } from './contexts';
export declare enum FormActionEnums {
    DataPropertyAdd = "DATA_PROPERTY_ADD",
    ComponentAdd = "COMPONENT_ADD",
    ComponentDelete = "COMPONENT_DELETE",
    ComponentDuplicate = "COMPONENT_DUPLICATE",
    ComponentUpdate = "COMPONENT_UPDATE",
    ComponentUpdateSettingsValidation = "COMPONENT_UPDATE_SETTINGS_VALIDATION",
    ComponentAddFromTemplate = "COMPONENT_ADD_FROM_TEMPLATE",
    ChangeMarkup = "CHANGE_MARKUP",
    SetReadOnly = "SET_READ_ONLY",
    SetFlatComponentsAction = "SET_FLAT_COMPONENTS",
    SetDebugMode = "SET_DEBUG_MODE",
    StartDraggingNewItem = "START_DRAGGING_NEW_ITEM",
    EndDraggingNewItem = "END_DRAGGING_NEW_ITEM",
    StartDragging = "START_DRAGGING",
    EndDragging = "END_DRAGGING",
    UpdateChildComponents = "UPDATE_CHILD_COMPONENTS",
    SetValidationErrors = "SET_VALIDATION_ERRORS",
    SetSelectedComponent = "SET_SELECTED_COMPONENT",
    UpdateFormSettings = "UPDATE_FORM_SETTINGS",
    AddDataSource = "ADD_DATA_SOURCE",
    RemoveDataSource = "REMOVE_DATA_SOURCE",
    SetActiveDataSource = "SET_ACTIVE_DATA_SOURCE",
    UpdateToolboxComponentGroups = "UPDATE_TOOLBOX_COMPONENT_GROUPS"
}
export declare const setReadOnlyAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const dataPropertyAddAction: import("redux-actions").ActionFunction1<IAddDataPropertyPayload, import("redux-actions").Action<IAddDataPropertyPayload>>;
export declare const componentAddAction: import("redux-actions").ActionFunction1<IComponentAddPayload, import("redux-actions").Action<IComponentAddPayload>>;
export declare const componentAddFromTemplateAction: import("redux-actions").ActionFunction1<IComponentAddFromTemplatePayload, import("redux-actions").Action<IComponentAddFromTemplatePayload>>;
export declare const componentDeleteAction: import("redux-actions").ActionFunction1<IComponentDeletePayload, import("redux-actions").Action<IComponentDeletePayload>>;
export declare const componentDuplicateAction: import("redux-actions").ActionFunction1<IComponentDuplicatePayload, import("redux-actions").Action<IComponentDuplicatePayload>>;
export declare const componentUpdateAction: import("redux-actions").ActionFunction1<IComponentUpdatePayload, import("redux-actions").Action<IComponentUpdatePayload>>;
export declare const componentUpdateSettingsValidationAction: import("redux-actions").ActionFunction1<IComponentUpdateSettingsValidationPayload, import("redux-actions").Action<IComponentUpdateSettingsValidationPayload>>;
export declare const changeMarkupAction: import("redux-actions").ActionFunction1<IFlatComponentsStructure, import("redux-actions").Action<IFlatComponentsStructure>>;
export declare const setFlatComponentsAction: import("redux-actions").ActionFunction1<IFlatComponentsStructure, import("redux-actions").Action<IFlatComponentsStructure>>;
export declare const setDebugModeAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const startDraggingNewItemAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const endDraggingNewItemAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const startDraggingAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const endDraggingAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const setValidationErrorsAction: import("redux-actions").ActionFunction1<IFormValidationErrors, import("redux-actions").Action<IFormValidationErrors>>;
export declare const updateChildComponentsAction: import("redux-actions").ActionFunction1<IUpdateChildComponentsPayload, import("redux-actions").Action<IUpdateChildComponentsPayload>>;
export declare const setSelectedComponentAction: import("redux-actions").ActionFunction1<ISetSelectedComponentPayload, import("redux-actions").Action<ISetSelectedComponentPayload>>;
export declare const updateFormSettingsAction: import("redux-actions").ActionFunction1<IFormSettings, import("redux-actions").Action<IFormSettings>>;
export declare const addDataSourceAction: import("redux-actions").ActionFunction1<IDataSource, import("redux-actions").Action<IDataSource>>;
export declare const removeDataSourceAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const setActiveDataSourceAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
export declare const updateToolboxComponentGroupsAction: import("redux-actions").ActionFunction1<IToolboxComponentGroup[], import("redux-actions").Action<IToolboxComponentGroup[]>>;
