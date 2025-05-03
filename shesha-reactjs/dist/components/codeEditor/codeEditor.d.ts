import React from 'react';
import { ICodeEditorProps } from './models';
/**
 * Renders a CodeEditor component for the given ICodeEditorProps.
 *
 * @param {ICodeEditorProps} props - the props for the CodeEditor component
 * @return {ReactElement} The rendered CodeEditor component
 */
export declare const CodeEditor: React.FC<Omit<ICodeEditorProps, "availableConstants"> & {
    availableConstants?: import("../..").IObjectMetadata | (() => Promise<import("../..").IObjectMetadata>);
}>;
