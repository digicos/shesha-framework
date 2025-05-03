export interface ISourcesFolderContext {
    /**
     * Folder name
     */
    folder: string;
    /**
     * Folder full path
     */
    path: string;
}
export declare const SourcesFolderContext: import("react").Context<ISourcesFolderContext>;
