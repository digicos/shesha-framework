import { FC } from 'react';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
export interface IMultiCheckBoxRefListProps {
    readonly listName: string;
    readonly listNamespace: string;
    readonly onChange?: (e: CheckboxChangeEvent, itemValue: number) => void;
    readonly columns?: 1 | 2 | 3 | 4;
}
export declare const MultiCheckBoxRefList: FC<IMultiCheckBoxRefListProps>;
export default MultiCheckBoxRefList;
