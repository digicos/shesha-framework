import { IToolboxComponent } from '../../interfaces';
import { FC } from 'react';
import { IConfigurableFormComponent } from '../../providers';
export interface IDataContextSelectorProps<TValue = any> {
    readOnly?: boolean;
    value?: TValue;
    onChange?: (value: TValue) => void;
}
declare const DataContextSelector: FC<IDataContextSelectorProps>;
interface IDataContextSelectorComponentProps extends IConfigurableFormComponent {
}
declare const DataContextSelectorComponent: IToolboxComponent<IDataContextSelectorComponentProps>;
export { DataContextSelector };
export default DataContextSelectorComponent;
