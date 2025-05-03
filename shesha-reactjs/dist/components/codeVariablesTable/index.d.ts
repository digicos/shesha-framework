import { FC } from 'react';
export interface ICodeExposedVariable {
    id?: string;
    name: string;
    description: string;
    type: string;
}
export interface ICodeVariablesTableProps {
    data?: ICodeExposedVariable[];
}
export declare const CodeVariablesTables: FC<ICodeVariablesTableProps>;
