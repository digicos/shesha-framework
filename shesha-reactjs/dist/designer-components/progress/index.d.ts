import { IConfigurableFormComponent } from '../../providers/form/models';
import { IToolboxComponent } from '../../interfaces';
import { ProgressProps } from 'antd';
import { ProgressType } from 'antd/lib/progress/progress';
interface IProgressProps extends Omit<ProgressProps, 'style' | 'type' | 'size' | 'format' | 'success' | 'strokeColor'>, IConfigurableFormComponent {
    format?: string;
    progressType?: ProgressType;
    success?: string;
    strokeColor?: string;
    lineStrokeColor?: string;
    circleStrokeColor?: string;
}
declare const ProgressComponent: IToolboxComponent<IProgressProps>;
export default ProgressComponent;
