import { FC } from 'react';
import { ITreeState } from '../models';
export interface IItemsTreeProps {
    treeState: ITreeState;
    onChangeSelection: (selectedKeys: string[]) => void;
}
export declare const ItemsTree: FC<IItemsTreeProps>;
export default ItemsTree;
