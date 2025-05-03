import { GroupingItem as SortingItem } from '../../../providers/dataTable/interfaces';
import { FC } from 'react';
export interface ISortingEditorProps {
    value?: SortingItem[];
    onChange: (newValue?: SortingItem[]) => void;
    modelType: string;
    readOnly?: boolean;
}
export declare const SortingEditor: FC<ISortingEditorProps>;
