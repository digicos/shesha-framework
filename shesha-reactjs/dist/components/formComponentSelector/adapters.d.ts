import { IDictionary } from '../../interfaces';
type PropertyInclusionPredicate = (name: string) => boolean;
export declare const updateModelExcludeFiltered: (model: any, updatedModel: any, filter: PropertyInclusionPredicate) => any;
export interface IEditorAdapter {
    propertiesFilter: PropertyInclusionPredicate;
}
export declare const getAllExceptPredicate: (names: string[]) => PropertyInclusionPredicate;
export declare const editorAdapters: IDictionary<IEditorAdapter>;
export {};
