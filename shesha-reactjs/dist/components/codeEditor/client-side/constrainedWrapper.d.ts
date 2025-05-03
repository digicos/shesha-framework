import { editor, Range as MonacoRange } from "monaco-editor";
import { Monaco } from "@monaco-editor/react";
import { ConstrainedInstance } from "./utils";
export declare const constrainedMonaco: (editor: Monaco) => ConstrainedInstance;
export interface ValueInEditableRanges {
    [key: string]: string;
}
export interface EditableRange {
    allowMultiline: Boolean;
    range: MonacoRange;
    originalRange: number[];
}
export interface EditableRangesDictionary {
    [key: string]: EditableRange;
}
export type onChangeCallback = (currentlyChangedContent: ValueInEditableRanges, allValuesInEditableRanges: ValueInEditableRanges, currentEditableRangeObject: EditableRangesDictionary) => void;
export interface ConstrainedTextModel extends editor.ITextModel {
    onDidChangeContentInEditableRange: (callback: onChangeCallback) => void;
}
export declare const isConstrainedTextModel: (model: editor.ITextModel) => model is ConstrainedTextModel;
