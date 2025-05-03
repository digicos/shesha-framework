import { FC } from 'react';
export interface IMultiReadCheckBoxRefListProps {
    readonly listName: string;
    readonly listNamespace: string;
    readonly value?: number;
    readonly display?: 'boolean' | 'check' | 'component' | 'yn';
}
export declare const binaryToList: (val: number) => any[];
export declare const MultiReadCheckBoxRefList: FC<IMultiReadCheckBoxRefListProps>;
export default MultiReadCheckBoxRefList;
