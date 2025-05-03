import { ButtonGroupItemProps, IButtonGroupItemBase, IDynamicItem } from '../../../providers/buttonGroupConfigurator/models';
export interface IDynamicItemsEvaluationStore {
    dynamicItems: IResolvedDynamicItem[];
    items: ButtonGroupItemProps[];
}
export interface IResolvedDynamicItem extends IDynamicItem {
    isResolved: boolean;
    resolvedItems: ButtonGroupItemProps[];
}
export declare const isResolvedDynamicItem: (item: IButtonGroupItemBase) => item is IResolvedDynamicItem;
export declare const getDynamicActionsItemsLevel: (items: ButtonGroupItemProps[], onDynamicItem: (dynamicItem: IResolvedDynamicItem) => void) => ButtonGroupItemProps[];
export declare const getItemsWithResolved: (items: ButtonGroupItemProps[]) => ButtonGroupItemProps[];
