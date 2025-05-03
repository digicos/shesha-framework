import { FC } from 'react';
import { IConfigurableTheme } from '../../../providers/theme/contexts';
export interface ThemeParametersProps {
    value?: IConfigurableTheme;
    onChange?: (theme: IConfigurableTheme) => void;
    readonly?: boolean;
}
declare const ThemeParameters: FC<ThemeParametersProps>;
export default ThemeParameters;
