import React, { FC } from 'react';
import { IConfigurableFormItemProps } from '../../components';
interface ISettingsFormItemProps extends Omit<IConfigurableFormItemProps, 'model'> {
    name?: string;
    label?: string;
    jsSetting?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
    required?: boolean;
    tooltip?: string;
    hidden?: boolean;
}
declare const SettingsFormItem: FC<ISettingsFormItemProps>;
export default SettingsFormItem;
