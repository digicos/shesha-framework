import { FC } from 'react';
import { IButtonGroupItem } from '../../providers/buttonGroupConfigurator/models';
import { IConfigurableActionConfiguration } from '../../providers';
export interface IButtonGroupItemProps {
    item: IButtonGroupItem;
    actualModelContext?: any;
    actionConfiguration?: IConfigurableActionConfiguration;
}
export declare const ButtonGroupItem: FC<IButtonGroupItemProps>;
