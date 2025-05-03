import { FC } from 'react';
import { IConfigurableTheme } from '../../../index';
export interface IConfigurableThemePageProps {
    value?: IConfigurableTheme;
    onChange?: (theme: IConfigurableTheme) => void;
    readonly?: boolean;
}
export declare const ConfigurableThemeContent: FC<IConfigurableThemePageProps>;
