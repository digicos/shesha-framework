import React, { FC } from 'react';
import { ButtonGroupItemProps, IButtonGroup } from '../../providers/buttonGroupConfigurator/models';
import { ItemChangeDetails } from '../listEditor';
export interface IContainerRenderArgs {
    index?: number[];
    id?: string;
    items: ButtonGroupItemProps[];
    onChange: (newValue: ButtonGroupItemProps[], changeDetails: ItemChangeDetails) => void;
}
export interface IButtonGroupItemsGroupProps {
    index: number[];
    item: IButtonGroup;
    onChange: (newValue: IButtonGroup, changeDetails: ItemChangeDetails) => void;
    containerRendering: (args: IContainerRenderArgs) => React.ReactNode;
    actualModelContext?: any;
}
export declare const ButtonGroupItemsGroup: FC<IButtonGroupItemsGroupProps>;
