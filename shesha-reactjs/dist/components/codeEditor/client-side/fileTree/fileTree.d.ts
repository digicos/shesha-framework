import { FC } from 'react';
import { Monaco } from '@monaco-editor/react';
import { UriComponents } from 'monaco-editor';
export interface IFileTreeProps {
    monaco: Monaco;
    defaultSelection?: UriComponents;
    onSelect?: (fileUri?: UriComponents) => void;
}
export declare const FileTree: FC<IFileTreeProps>;
