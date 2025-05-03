import { ButtonGroupItemProps } from '../../providers';
import React, { FC } from 'react';
import { ItemChangeDetails, NestedItemsRenderingArgs } from '../../components/listEditor';
export interface IButtonGroupListItemProps {
    item: ButtonGroupItemProps;
    onChange: (newValue: ButtonGroupItemProps, changeDetails: ItemChangeDetails) => void;
    index: number[];
    nestedRenderer?: (args: NestedItemsRenderingArgs<ButtonGroupItemProps>) => React.ReactNode | null;
    initNewItem: (items: ButtonGroupItemProps[]) => ButtonGroupItemProps;
    actualModelContext?: any;
}
export declare const ButtonGroupListItem: FC<IButtonGroupListItemProps>;
