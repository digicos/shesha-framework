import { FC, ReactNode } from 'react';
import { IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { FilledIconTypes } from './iconNamesFilled';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { OutlinedIconTypes } from './iconNamesOutlined';
import { TwoToneIconTypes } from './iconNamesTwoTone';
export type ShaIconTypes = FilledIconTypes | OutlinedIconTypes | TwoToneIconTypes;
export interface IIconPickerProps extends IconBaseProps {
    /** The icon name */
    value?: ShaIconTypes;
    /** A callback for when the icon changes */
    onIconChange?: (icon: ReactNode, iconName: ShaIconTypes) => void;
    /** The size of the select button */
    selectBtnSize?: SizeType;
    /** if true, indicates that the picker is readonly */
    readOnly?: boolean;
    twoToneColor?: string;
    defaultValue?: ShaIconTypes;
}
/**
 * A component for selecting icons, usually for form
 */
declare const IconPicker: FC<IIconPickerProps>;
export default IconPicker;
