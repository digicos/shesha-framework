import { Rule } from 'antd/lib/form';
import { Rules, ValidateSource } from 'async-validator';
import { CSSProperties } from 'react';
import { IToolboxComponent, IToolboxComponentGroup, IToolboxComponents, SettingsMigrationContext } from '../../interfaces';
import { IPropertyMetadata, NestedProperties } from '../../interfaces/metadata';
import { IAnyObject } from './../../interfaces/anyObject';
import { ActionArguments, ActionParameters, ActionParametersDictionary, FormFullName, FormIdentifier, FormMarkup, FormMarkupWithSettings, FormUid, GenericDictionary, IComponentsDictionary, IConfigurableFormComponent, IFlatComponentsStructure, IFormSettings, IFormValidationRulesOptions, EditMode, ViewType, FormRawMarkup } from './models';
import { IDataContextManagerFullInstance, IDataContextsData } from '../../providers/dataContextManager';
import { ISelectionProps } from '../../providers/dataTable/contexts';
import { ContextGetData, IDataContextFull } from '../../providers/dataContextProvider/contexts';
import { IApplicationApi } from '../../providers';
import { AxiosInstance } from 'axios';
import { MessageInstance } from 'antd/es/message/interface';
import { IParentProviderProps } from '../parentProvider/index';
import { FormApi } from './formApi';
import { ProxyPropertiesAccessors } from './observableProxy';
import { ISetStatePayload } from '../globalState/contexts';
import { IShaFormInstance } from './store/interfaces';
import { QueryStringParams } from '../../utils/url';
/** Interface to get all avalilable data */
export interface IApplicationContext<Value = any> {
    application?: IApplicationApi;
    contextManager?: IDataContextManagerFullInstance;
    /** Form data */
    data?: any;
    form?: FormApi<Value>;
    /** Contexts datas */
    contexts: IDataContextsData;
    /** Global state */
    globalState: any;
    /** Table selection */
    selectedRow: ISelectionProps;
    /** Moment function */
    moment: Function;
    /** Axios Http */
    http: AxiosInstance;
    /** Message API */
    message: MessageInstance;
    /** Last updated date */
    lastUpdated?: Date;
    pageContext?: IDataContextFull;
    setGlobalState: (payload: ISetStatePayload) => void;
    /**
     * Query string values. Is used for backward compatibility only
     */
    query: QueryStringParams;
    /**
     * Initial form values. Is used for backward compatibility only
     */
    initialValues: any;
    /**
     * Parent form values. Is used for backward compatibility only
     */
    parentFormValues: any;
}
export type GetAvailableConstantsDataArgs = {
    topContextId?: string;
    shaForm?: IShaFormInstance;
    queryStringGetter?: () => QueryStringParams;
};
export type AvailableConstantsContext = {
    closestShaForm: IShaFormInstance;
    selectedRow?: ISelectionProps;
    dcm: IDataContextManagerFullInstance;
    closestContextId: string;
    globalState: IAnyObject;
    setGlobalState: (payload: ISetStatePayload) => void;
    backendUrl: string;
    message: MessageInstance;
};
export declare const useAvailableConstantsContexts: () => AvailableConstantsContext;
export type WrapConstantsDataArgs = GetAvailableConstantsDataArgs & {
    fullContext: AvailableConstantsContext;
};
export declare const wrapConstantsData: (args: WrapConstantsDataArgs) => ProxyPropertiesAccessors<IApplicationContext>;
export declare const useAvailableConstantsData: (args?: GetAvailableConstantsDataArgs) => IApplicationContext;
export declare const useApplicationContextData: () => ContextGetData;
export declare const getReadOnlyBool: (editMode: EditMode, parentReadOnly: boolean) => boolean;
/**
 * Convert model to values calculated from JS code if provided (for each fields)
 *
 * @param model - model
 * @param allData - all form, contexts data and other data/objects/functions needed to calculate Actual Model
 * @returns - converted model
 */
export declare const getActualModel: <T>(model: T, allData: any, parentReadOnly?: boolean) => T;
export declare const isCommonContext: (name: string) => boolean;
export declare const getActualModelWithParent: <T>(model: T, allData: any, parent: IParentProviderProps) => T;
export declare const getActualPropertyValue: <T>(model: T, allData: any, propertyName: string) => T;
export declare const updateModelToMoment: (model: any, properties: NestedProperties) => Promise<any>;
/**
 * Convert components tree to flat structure.
 * In flat structure we store components settings and their relations separately:
 * allComponents - dictionary (key:value) of components. key - Id of the component, value - conponent settings
 * componentRelations - dictionary of component relations. key - id of the container, value - ordered list of subcomponent ids
 */
export declare const componentsTreeToFlatStructure: (toolboxComponents: IToolboxComponents, components: IConfigurableFormComponent[]) => IFlatComponentsStructure;
export declare const upgradeComponent: (componentModel: IConfigurableFormComponent, definition: IToolboxComponent, formSettings: IFormSettings, flatStructure: IFlatComponentsStructure, isNew?: boolean) => IConfigurableFormComponent;
export declare const upgradeComponents: (toolboxComponents: IToolboxComponents, formSettings: IFormSettings, flatStructure: IFlatComponentsStructure, isNew?: boolean) => void;
export declare const getClosestComponent: (componentId: string, context: SettingsMigrationContext, componentType: string) => IConfigurableFormComponent;
export declare const getClosestTableId: (context: SettingsMigrationContext) => any;
/** Convert flat components structure to a component tree */
export declare const componentsFlatStructureToTree: (toolboxComponents: IToolboxComponents, flat: IFlatComponentsStructure) => IConfigurableFormComponent[];
export declare const upgradeComponentsTree: (toolboxComponents: IToolboxComponents, formSettings: IFormSettings, components: IConfigurableFormComponent[]) => IConfigurableFormComponent[];
/**
 * Evaluates the string using Mustache template.
 *
 * Given a the below expression
 * const expression =  'My name is {{name}}';
 *
 * and the below data
 *  const data = { name: 'John', surname: 'Dow' };
 *  evaluateString()
 * the expression below
 *   evaluateString(expression, data);
 * The below expression will return 'My name is John';
 *
 * @param template - string template
 * @param data - data to use to evaluate the string
 * @returns {string} evaluated string
 */
export declare const evaluateString: (template: string, data: any, skipUnknownTags?: boolean) => string;
/**
 * Evaluates the string using Mustache template. Same as {evaluateString} except it allows you to pass an array of
 * objects that can be used to evaluate one string using multiple objects like data1, data2, data3... which can have conflicting keys
 *
 * Given a the below expression
 * ```typescript
 *  const expression =  'My name is {{person.name}} {{person.surname}}. I work at {{company.name}}';
 *
 *  // and the below data
 *  const mappings = [{
 *      match: 'person',
 *      data: { name: 'John', surname: 'Dow' }
 *    },
 *      match: 'company',
 *      data: { name: 'Boxfusion' }
 *    {
 *  }]
 *
 *  const data = { name: 'John', surname: 'Dow' };
 *  const company = { name: 'Boxfusion' };
 *
 *  // the expression below
 *  const evaluatedString = evaluateString(expression, mappings);
 *  // will yield
 *  'My name is John Doe. I work at Boxfusion';
 * ```
 *
 * @param template - string template
 * @param data - data to use to evaluate the string
 * @returns {string} evaluated string
 */
export declare const evaluateComplexString: (expression: string, mappings: IMatchData[]) => string;
export interface IEvaluateComplexStringResult {
    result: string;
    unevaluatedExpressions?: string[];
    success?: boolean;
}
/**
 * Evaluates the string using Mustache template. Same as {evaluateComplexString} except it returns the result
 * with a flag indicating if evaluation was successful.
 *
 * A successful evaluation is the one in which not all the expressions were evaluated
 *
 * Given a the below expression
 * ```typescript
 *  const expression =  'My name is {{person.name}} {{person.surname}}. I work at {{company.name}}';
 *
 *  const expression2 =  'My name is {{person.name}} {{person.surname}}. I work at {{someCompany.name}}';
 *
 *  // and the below data
 *  const mappings = [{
 *      match: 'person',
 *      data: { name: 'John', surname: 'Dow' }
 *    },
 *      match: 'company',
 *      data: { name: 'Boxfusion' }
 *    {
 *  }]
 *
 *  const data = { name: 'John', surname: 'Dow' };
 *  const company = { name: 'Boxfusion' };
 *
 *
 *
 *  // the expression below
 *  const evaluatedStringResult = evaluateString(expression, mappings);
 *  // will yield
 *  { result: 'My name is John Doe. I work at Boxfusion', success: true }
 *
 *  // However, the the below expression
 * const evaluatedStringResults = evaluateString(expression2, mappings);
 * will yield
 *
 * { result: 'My name is John Doe. I work at {{someCompany.name}}', success: false }
 *
 * // because {{someCompany.name}} could not be evaluated successfully
 * ```
 *
 * @param template - string template
 * @param data - data to use to evaluate the string
 * @returns {string} evaluated string
 */
export declare const evaluateComplexStringWithResult: (expression: string, mappings: IMatchData[], requireNonEmptyResult: boolean) => IEvaluateComplexStringResult;
export interface IExpressionExecuterArguments {
    [key: string]: any;
}
export type IExpressionExecuterFailedHandler<TResult> = (error: any) => TResult;
export declare function executeExpression<TResult>(expression: string, expressionArgs: IExpressionExecuterArguments, defaultValue: TResult, onFail: IExpressionExecuterFailedHandler<TResult>): TResult;
interface FunctionArgument {
    name: string;
    description?: string;
}
export type FunctionExecutor<TResult = any> = (...args: any) => TResult;
export declare const getFunctionExecutor: <TResult = any>(expression: string, expressionArguments: FunctionArgument[]) => FunctionExecutor<TResult>;
export declare function executeScript<TResult = any>(expression: string, expressionArgs: IExpressionExecuterArguments): Promise<TResult>;
export declare function executeScriptSync<TResult = any>(expression: string, context: IExpressionExecuterArguments): TResult;
/**
 * Return ids of filtered components according to the custom visibility
 */
export declare const getFilteredComponentIds: (components: IComponentsDictionary, propertyFilter?: (name: string) => boolean) => string[];
/**
 * Return field name for the antd form by a given expression
 *
 * @param expression field name in dot notation e.g. 'supplier.name' or 'fullName'
 */
export declare const getFieldNameFromExpression: (expression: string) => string | string[];
export declare const getBoolean: (value: any) => boolean;
export declare const hasBoolean: (value: any) => boolean;
/**
 * Return valudation rules for the specified form component
 */
export declare const getValidationRules: (component: IConfigurableFormComponent, options?: IFormValidationRulesOptions) => Rule[];
/**
 * Evaluates an string expression and returns the evaluated value.
 *
 * Example: Given
 *  let const person = { name: 'First', surname: 'Last' };
 *  let expression = 'Full name is {{name}} {{surname}}';
 *
 * evaluateExpression(expression, person) will display 'Full name is First Last';
 *
 * @param expression the expression to evaluate
 * @param data the data to use to evaluate the expression
 * @returns
 */
export declare const evaluateStringLiteralExpression: (expression: string, data: any) => string;
/**
 * Evaluates an string expression and returns the evaluated value.
 *
 * Example: Given
 *  let const person = { name: 'First', surname: 'Last' };
 *  let expression = 'Full name is {{name}} {{surname}}';
 *
 * evaluateExpression(expression, person) will display 'Full name is First Last';
 *
 * @param expression the expression to evaluate
 * @param data the data to use to evaluate the expression
 * @returns
 */
export declare const evaluateExpression: (expression: any, data: any) => string;
/**
 * Remove zero-width space characters from a string.
 *
 * Unicode has the following zero-width characters:
 *  U+200B zero width space
 *  U+200C zero width non-joiner Unicode code point
 *  U+200D zero width joiner Unicode code point
 *  U+FEFF zero width no-break space Unicode code point
 * To remove them from a string in JavaScript, you can use a simple function:
 *
 * @see {@link https://stackoverflow.com/questions/11305797/remove-zero-width-space-characters-from-a-javascript-string} for further information
 */
export declare const removeZeroWidthCharsFromString: (value: string) => string;
export declare const evaluateValue: (value: string, dictionary: any) => any;
export declare const replaceTags: (value: string, dictionary: any) => string;
export declare const findToolboxComponent: (availableComponents: IToolboxComponentGroup[], predicate: (component: IToolboxComponent) => boolean) => IToolboxComponent;
export declare const getComponentsFromMarkup: (markup: FormMarkup) => IConfigurableFormComponent[];
export declare const getFromSettingsFromMarkup: (markup: FormMarkup) => IFormSettings;
/** backward compatibility */
export declare const getComponentsAndSettings: (markup: FormMarkup) => FormMarkupWithSettings;
export declare const validateForm: (rules: Rules, values: ValidateSource) => Promise<void>;
export declare const getFormValidationRules: (markup: FormMarkup) => Rules;
export declare const validateConfigurableComponentSettings: (markup: FormMarkup, values: ValidateSource) => Promise<void>;
export declare function linkComponentToModelMetadata<TModel extends IConfigurableFormComponent>(component: IToolboxComponent<TModel>, model: TModel, metadata: IPropertyMetadata): TModel;
export type ProcessingFunc = (child: IConfigurableFormComponent, parentId: string) => void;
export declare const processRecursive: (componentsRegistration: IToolboxComponentGroup[], parentId: string, component: IConfigurableFormComponent, func: ProcessingFunc) => void;
/**
 * Clone components and generate new ids for them
 *
 * @param componentsRegistration
 * @param components
 * @returns
 */
export declare const cloneComponents: (componentsRegistration: IToolboxComponentGroup[], components: IConfigurableFormComponent[]) => IConfigurableFormComponent[];
export declare const getDefaultFormMarkup: (type?: ViewType) => {
    components: {
        id: string;
        type: string;
        propertyName: string;
        label: string;
        labelAlign: string;
        parentId: string;
        hidden: boolean;
        components: any[];
    }[];
};
export declare const createComponentModelForDataProperty: (components: IToolboxComponentGroup[], propertyMetadata: IPropertyMetadata, migrator?: (componentModel: IConfigurableFormComponent, toolboxComponent: IToolboxComponent<any>) => IConfigurableFormComponent) => IConfigurableFormComponent;
interface IKeyValue {
    key: string;
    value: string;
}
export declare const evaluateKeyValuesToObject: (arr: IKeyValue[], data: any) => IAnyObject;
export interface IMatchData {
    match: string;
    data: any;
}
export declare const getMatchData: (dictionary: IMatchData[], name: string) => any;
export declare const evaluateKeyValuesToObjectMatchedData: <T extends unknown>(obj: IKeyValue[] | IAnyObject, matches: IMatchData[]) => T;
export declare const getObjectWithOnlyIncludedKeys: (obj: IAnyObject, includedProps: string[]) => IAnyObject;
export declare const pickStyleFromModel: (model: IConfigurableFormComponent, ...args: any[]) => {
    [key: string]: any;
};
export declare const getStyle: (style: string, formData?: any, globalState?: any, defaultStyle?: object) => CSSProperties;
export declare const getLayoutStyle: (model: IConfigurableFormComponent, args: {
    [key: string]: any;
}) => any;
export declare const getString: (expression: string, formData?: any, globalState?: any) => string;
export declare const filterFormData: (data: any) => any;
/**
 * Convert list of properties in dot notation to a list of properties for fetching using GraphQL syntax
 *
 * @param properties
 * @returns
 */
export declare const convertDotNotationPropertiesToGraphQL: (properties: string[]) => string;
export declare const isFormRawId: (formId: FormIdentifier) => formId is FormUid;
export declare const isFormFullName: (formId: FormIdentifier) => formId is FormFullName;
export declare const isSameFormIds: (id1: FormIdentifier, id2: FormIdentifier) => boolean;
export declare const hasFormIdGotValue: (formId: FormIdentifier) => boolean;
export declare const convertToMarkupWithSettings: (markup: FormMarkup, isSettingsForm?: boolean) => FormMarkupWithSettings;
export interface EvaluationContext {
    contextData: GenericDictionary;
    path: string;
    evaluationFilter?: (context: EvaluationContext, data: any) => boolean;
}
export declare const recursiveEvaluator: <TArguments = ActionParametersDictionary>(argumentsConfiguration: TArguments, evaluationContext: EvaluationContext) => Promise<TArguments>;
export declare const genericActionArgumentsEvaluator: <TArguments = ActionParametersDictionary>(argumentsConfiguration: TArguments, evaluationData: GenericDictionary) => Promise<TArguments>;
/**
 * Convert action parameters definition to a runtime parameters
 */
export declare const getFormActionArguments: (params: ActionParameters, evaluationContext: GenericDictionary) => Promise<ActionArguments>;
export declare const executeCustomExpression: (expression: string, returnBoolean?: boolean, formData?: {}, globalState?: {}) => boolean;
export declare const executeCustomExpressionV2: (expression: string, context: any, returnBoolean?: boolean) => boolean;
type ComponentByTypePredicate = (component: IConfigurableFormComponent) => boolean;
export declare const getComponentNames: (components: IComponentsDictionary, predicate: ComponentByTypePredicate) => string[];
/**
 * Converts the given form markup to a flat structure of configurable form components.
 *
 * @param {FormRawMarkup} markup - The form markup to convert.
 * @param {IFormSettings} formSettings - The form settings.
 * @param {IToolboxComponents} designerComponents - The designer components.
 * @return {IFlatComponentsStructure} The flat structure of configurable form components.
 */
export declare const convertFormMarkupToFlatStructure: (markup: FormRawMarkup, formSettings: IFormSettings, designerComponents: IToolboxComponents) => IFlatComponentsStructure;
export {};
