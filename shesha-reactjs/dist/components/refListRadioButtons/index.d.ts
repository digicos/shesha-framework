import { FC, Key } from 'react';
import { RadioChangeEvent, RadioGroupProps } from 'antd';
import { ReferenceListItemDto } from '../../apis/referenceList';
export interface IRefListDropDownOption {
    children?: string;
    key: string;
    value?: Key;
}
export interface IRefListRadioButtonsProps extends RadioGroupProps {
    /** Reference list name */
    listName: string;
    /** Reference list namespace */
    listNamespace: string;
    /** Filters - these are the reference list values that you want to show. If passed, only these will be shown and the rest won't */
    filters?: number[];
    /** The orientation of the radio button */
    orientation?: 'vertical' | 'inline';
    /**
     * A callback for when the selections change
     */
    onSelectionChange?: (value: number, event?: RadioChangeEvent) => void;
    /** The selected value */
    value?: number | ReferenceListItemDto;
}
/** A component for displaying reference list item as radio buttons */
declare const RefListRadioButtons: FC<IRefListRadioButtonsProps>;
export default RefListRadioButtons;
