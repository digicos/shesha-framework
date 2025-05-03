import { ShaIconTypes } from '../../components/iconPicker';
import { FC } from 'react';
import { IApplicationContext } from '../../providers/form/utils';
interface IconPickerWrapperProps {
    disabled?: boolean;
    applicationContext: IApplicationContext;
    value: any;
    onChange: (...args: any[]) => void;
    readOnly?: boolean;
    fontSize?: number;
    color?: string;
    customColor?: string;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    backgroundColor?: string;
    stylingBox?: string;
    defaultValue?: ShaIconTypes;
    textAlign?: string;
}
export declare const IconPickerWrapper: FC<IconPickerWrapperProps>;
export {};
