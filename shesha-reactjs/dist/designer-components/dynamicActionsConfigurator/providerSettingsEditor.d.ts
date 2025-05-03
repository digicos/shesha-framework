import { FC } from 'react';
import { IObjectMetadata } from '../../interfaces';
import { IDynamicActionsContext } from '../../providers/dynamicActions/contexts';
export interface IProviderSettingsEditorProps {
    provider: IDynamicActionsContext;
    value?: any;
    onChange?: (value: any) => void;
    readOnly?: boolean;
    availableConstants?: IObjectMetadata;
}
export declare const ProviderSettingsEditor: FC<IProviderSettingsEditorProps>;
