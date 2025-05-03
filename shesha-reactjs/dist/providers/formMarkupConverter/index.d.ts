import { FC, ReactNode } from 'react';
import { FormRawMarkup, IFlatComponentsStructure, IFormSettings } from '../form/models';
export interface IFormMarkupConverterProps {
    markup: FormRawMarkup;
    formSettings: IFormSettings;
    children: (flatStructure: IFlatComponentsStructure, onChange: (flatStructure: IFlatComponentsStructure) => void) => ReactNode;
}
declare const FormMarkupConverter: FC<IFormMarkupConverterProps>;
export { FormMarkupConverter };
