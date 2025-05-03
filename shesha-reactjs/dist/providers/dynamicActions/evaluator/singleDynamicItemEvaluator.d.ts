import { ButtonGroupItemProps } from '../../../providers/buttonGroupConfigurator/models';
import { FC } from 'react';
import { IResolvedDynamicItem } from './utils';
interface SingleDynamicItemEvaluatorProps {
    item: IResolvedDynamicItem;
    onEvaluated: (response: ButtonGroupItemProps[]) => void;
}
/**
 * Pseudo-component with no UI, is used as a proxy for evaluation of the dynamic items
 */
export declare const SingleDynamicItemEvaluator: FC<SingleDynamicItemEvaluatorProps>;
export {};
