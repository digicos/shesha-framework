import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
import { IShaStatisticProps } from '../../components/statistic';
interface IStatisticComponentProps extends Omit<IShaStatisticProps, 'style' | 'valueStyle'>, IConfigurableFormComponent {
    valueStyle?: string;
}
declare const StatisticComponent: IToolboxComponent<IStatisticComponentProps>;
export default StatisticComponent;
