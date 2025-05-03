export type DataTypeName = 'string' | 'number' | 'date' | 'entity' | 'boolean';
export type DataTypeDisplayAs = 'text' | 'drill-down' | 'quick-view' | 'stored-file';
export declare enum StandardNodeTypes {
    ConfigurableActionConfig = "action-config"
}
export interface IFormComponentDataType {
}
export type StringValueChange = (key: string, value: string) => void;
export type NumberValueChange = (key: string, value: number) => void;
export type BooleanValueChange = (key: string, value: boolean) => void;
export interface IFormComponent {
    id?: string;
    name?: string;
    type?: string;
    form?: string;
    parent?: string;
    orderIndex?: number;
    label?: string;
    value?: any;
    required?: boolean;
    editable?: boolean;
    dataType: {
        name: DataTypeName;
        displayAs: DataTypeDisplayAs;
    };
    info?: string;
    isEditting?: boolean;
    onChange: StringValueChange | NumberValueChange | BooleanValueChange;
}
