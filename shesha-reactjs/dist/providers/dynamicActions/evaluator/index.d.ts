import { ButtonGroupItemProps } from '../../../providers/buttonGroupConfigurator/models';
import React, { FC } from 'react';
export interface IDynamicActionsEvaluatorProps {
    items: ButtonGroupItemProps[];
    children: (items: ButtonGroupItemProps[]) => React.ReactElement;
}
export declare const DynamicActionsEvaluator: FC<IDynamicActionsEvaluatorProps>;
