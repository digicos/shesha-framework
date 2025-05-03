import { Monaco } from '@monaco-editor/react';
import { Directory, FileItemProps, SourceFile } from './models';
export declare const isDirectory: (item: FileItemProps) => item is Directory;
export declare const isFile: (item: FileItemProps) => item is SourceFile;
export declare const getSourcesTree: (monaco: Monaco) => Directory;
