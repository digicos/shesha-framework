import { Monaco } from "@monaco-editor/react";
import { Directory, FileTreeNode } from "./models";
export declare const useSourcesTree: (monaco: Monaco) => Directory;
export interface TreeNodeMap {
    [key: string]: FileTreeNode;
}
export interface UseTreeNodesResponse {
    nodes: FileTreeNode[];
    map: TreeNodeMap;
}
export declare const useSourcesTreeNodes: (monaco: Monaco) => UseTreeNodesResponse;
