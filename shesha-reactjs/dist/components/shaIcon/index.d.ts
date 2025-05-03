import { FC } from 'react';
import { IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { FilledIconTypes } from '../iconPicker/iconNamesFilled';
import { OutlinedIconTypes } from '../iconPicker/iconNamesOutlined';
import { TwoToneIconTypes } from '../iconPicker/iconNamesTwoTone';
export type IconType = FilledIconTypes | OutlinedIconTypes | TwoToneIconTypes;
export interface IShaIconProps extends IconBaseProps {
    iconName: IconType;
    twoToneColor?: string;
}
declare const ShaIcon: FC<IShaIconProps>;
export default ShaIcon;
