import { FC, PropsWithChildren } from 'react';
import { ISourcesFolderContext } from './contexts';
export interface ISourceFilesFolderProviderProps {
    folder: string;
}
/**
 * Returns the ISourcesFolderContext and throws an error if require is true and the SourcesFolderContext is undefined.
 *
 * @param {boolean} require - specifies whether the SourcesFolderContext is required
 * @return {ISourcesFolderContext} the SourcesFolderContext
 */
export declare const useSourcesFolder: (require: boolean) => ISourcesFolderContext;
/**
 * Returns the full path of a file or folder within the sources folder.
 *
 * @param {string} fileOrFolderName - The name of the file or folder.
 * @return {string} The full path of the file or folder.
 */
export declare const useSourceFullPath: (fileOrFolderName: string) => string;
/**
 * Component for providing the source files folder to its children.
 *
 * @param {PropsWithChildren<ISourceFilesFolderProviderProps>} folder - The source files folder.
 * @param {ReactNode} children - The child components to render.
 * @return {ReactElement} The JSX element representing the component.
 */
export declare const SourceFilesFolderProvider: FC<PropsWithChildren<ISourceFilesFolderProviderProps>>;
