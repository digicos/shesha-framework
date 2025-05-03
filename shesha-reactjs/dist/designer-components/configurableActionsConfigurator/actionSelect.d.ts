import { FC } from 'react';
import { IConfigurableActionGroupDictionary } from '../../providers/configurableActionsDispatcher/models';
interface IActionSelectProps {
    actions: IConfigurableActionGroupDictionary;
    value?: string;
    onChange?: () => void;
    readOnly?: boolean;
}
export declare const ActionSelect: FC<IActionSelectProps>;
export {};
