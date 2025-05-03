import { ITablePagerProps } from '../../../components';
import { IToolboxComponent } from '../../../interfaces';
import { IConfigurableFormComponent } from '../../../providers/form/models';
export interface IPagerComponentProps extends ITablePagerProps, IConfigurableFormComponent {
}
declare const PagerComponent: IToolboxComponent<IPagerComponentProps>;
export default PagerComponent;
