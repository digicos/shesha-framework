import { EditMode, IConfigurableFormComponent } from '../../providers';
export declare const migrateFunctionToProp: <T extends IConfigurableFormComponent>(prev: T, propName: string, funcPropname: string, replaceFunction?: (source: string) => string, invert?: Boolean) => T;
export declare const migrateHidden: <T extends IConfigurableFormComponent>(prev: T) => T;
export declare const migrateDisabled: <T extends IConfigurableFormComponent>(prev: T) => T;
export declare const migrateCustomFunctions: <T extends IConfigurableFormComponent>(prev: T) => T;
export declare const migratePropertyName: <T extends IConfigurableFormComponent>(prev: T) => T;
export declare const migrateReadOnly: <T>(prev: T, defaultValue?: EditMode) => T;
