import { FC } from 'react';
import { IToolbarItem } from '../../interfaces';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
export interface IActionButtonGroupProps {
    /** The items to display as buttons */
    items: IToolbarItem[];
    /** The class name */
    className?: string;
    /** The button size  */
    btnSize?: SizeType;
}
/**
 * A component to display action buttons.
 *
 * Can be rendered as toolbar items and extra buttons on the CollapsiblePanel
 */
export declare const ActionButtonGroup: FC<IActionButtonGroupProps>;
export default ActionButtonGroup;
