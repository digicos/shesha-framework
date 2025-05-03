import { FC } from 'react';
import { TooltipPlacement } from 'antd/lib/tooltip';
export interface IDateDisplayProps {
    /**
     * @deprecated - use children instead
     */
    date?: string;
    format?: string;
    children?: string;
    showTooltip?: boolean;
    dateAgo?: boolean;
    tooltipPlacement?: TooltipPlacement;
}
export declare const DateDisplay: FC<IDateDisplayProps>;
export default DateDisplay;
