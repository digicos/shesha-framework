import { FC } from 'react';
import { FormInstance } from 'antd';
import { IButtonItem } from '../../../providers/buttonGroupConfigurator/models';
import { CSSProperties } from 'react';
export interface IConfigurableButtonProps extends Omit<IButtonItem, 'style' | 'itemSubType'> {
    style?: CSSProperties;
    form: FormInstance<any>;
}
export declare const ConfigurableButton: FC<IConfigurableButtonProps>;
export default ConfigurableButton;
