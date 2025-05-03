import { IConfigurableActionConfiguration, IConfigurableFormComponent } from '../../providers';
import { IPropertyMetadata } from '../../interfaces/metadata';
import { IToolboxComponent } from '../../interfaces';
export interface IDataContextComponentProps extends IConfigurableFormComponent {
    items: IPropertyMetadata[];
    initialDataCode: string;
    onChangeAction?: IConfigurableActionConfiguration;
}
declare const DataContextComponent: IToolboxComponent<IDataContextComponentProps>;
export default DataContextComponent;
