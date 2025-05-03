import { FC, ReactNode } from 'react';
import { ButtonGroupItemProps } from '../../providers/buttonGroupConfigurator/models';
export interface IToolbarSettingsModal {
    readOnly: boolean;
    value?: ButtonGroupItemProps[];
    onChange?: (newValue: ButtonGroupItemProps[]) => void;
    title?: ReactNode | string;
}
interface IButtonGroupConfiguratorProps extends IToolbarSettingsModal {
}
export declare const ButtonGroupConfigurator: FC<IButtonGroupConfiguratorProps>;
export {};
