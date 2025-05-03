import { IConfigurableFormComponent } from '../../../providers/form/models';
import { IToolboxComponent } from '../../../interfaces';
export interface IQuickSearchComponentProps extends IConfigurableFormComponent {
    block?: boolean;
}
declare const QuickSearchComponent: IToolboxComponent<IQuickSearchComponentProps>;
export default QuickSearchComponent;
