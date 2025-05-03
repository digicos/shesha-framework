import { TypeAndLocation } from "./models";
export declare class TypesImporter {
    #private;
    import(type: TypeAndLocation): void;
    static cleanupFileNameForImport: (path: string) => string;
    generateImports(): string;
}
