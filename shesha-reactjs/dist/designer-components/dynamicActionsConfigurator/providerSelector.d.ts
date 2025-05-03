import { FC } from 'react';
export interface IProviderSelectorProps {
    value?: string;
    onChange?: (newValue: string) => void;
    readOnly?: boolean;
}
export declare const ProviderSelector: FC<IProviderSelectorProps>;
