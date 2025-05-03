import { FC } from 'react';
import { ColorValueType } from 'antd/es/color-picker/interface';
import type { ColorPickerProps } from 'antd';
type Preset = Required<ColorPickerProps>['presets'][number];
export interface IColorPickerProps {
    value?: ColorValueType;
    onChange?: (color: ColorValueType) => void;
    title?: string;
    presets?: Preset[];
    showText?: boolean;
    allowClear?: boolean;
    disabledAlpha?: boolean;
    readOnly?: boolean;
}
export declare const ColorPicker: FC<IColorPickerProps>;
export {};
