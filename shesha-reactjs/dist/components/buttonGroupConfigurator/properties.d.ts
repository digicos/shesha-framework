import { FC } from 'react';
import { ButtonGroupItemProps } from '../../providers';
export interface IButtonGroupPropertiesProps {
    item?: ButtonGroupItemProps;
    onChange?: (item: ButtonGroupItemProps) => void;
    readOnly: boolean;
}
export declare const ButtonGroupProperties: FC<IButtonGroupPropertiesProps>;
