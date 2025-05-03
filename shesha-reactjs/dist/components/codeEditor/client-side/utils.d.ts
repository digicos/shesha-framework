import { IPosition, IRange, editor } from "monaco-editor";
export interface ConstrainedInstance {
    initializeIn(editor: editor.IStandaloneCodeEditor): void;
    addRestrictionsTo(model: editor.ITextModel, restrictions: any[]): void;
    removeRestrictionsIn(model: editor.ITextModel): void;
}
export interface CodeRestriction {
    range: Array<number>[4];
    allowMultiline?: boolean;
}
interface TextPosition {
    line: number;
    column: number;
}
export interface TextRange {
    start: TextPosition;
    end: TextPosition;
}
export interface TextTemplate {
    content: string;
    editableRanges: TextRange[];
}
export declare const getLeadingWhiteSpaces: (text: string) => string;
/**
 * The placeholder string
 *
 * @param {string} value - the placeholder value
 * @return {Placeholder} the placeholder
 */
export type Placeholder = {
    value: string;
    readOnly: boolean;
    toString: () => string;
};
/**
 * The placeholder evaluation context
 */
export type PlaceholderEvaluatorContext = {
    /**
     * Current text position in a template, can be used for formatting of multiline placeholders (e.g. comments)
     */
    position: TextPosition;
    /**
     * Utility function that returns editable placeholder
     */
    editable: (text: string) => Placeholder;
    /**
     * Utility function that returns read-only placeholder
     */
    readOnly: (text: string) => Placeholder;
};
/**
 * The placeholder evaluator function type
 *
 * @param {PlaceholderEvaluatorContext} ctx - placeholder evaluation context
 * @return {string | Placeholder} the placeholder string
 */
export type PlaceholderEvaluator = (ctx: PlaceholderEvaluatorContext) => string | Placeholder;
/**
 * Generates a text template with editable regions based on the provided strings and expressions.
 * Note: all string values are interpreted as readonly. Use PlaceholderEvaluator for editable values.
 *
 * @param {TemplateStringsArray} strings - the template strings array
 * @param {(string | PlaceholderEvaluator)[]} expr - the expressions to be evaluated or replaced
 * @return {TextTemplate} the generated text template with editable ranges
 */
export declare const makeCodeTemplate: (strings: TemplateStringsArray, ...expr: (string | PlaceholderEvaluator)[]) => TextTemplate;
export type TemplateEvaluator = (code: string) => TextTemplate;
export declare const isRange: (value: IRange | IPosition) => value is IRange;
export declare const isPosition: (value: IRange | IPosition) => value is IPosition;
export {};
