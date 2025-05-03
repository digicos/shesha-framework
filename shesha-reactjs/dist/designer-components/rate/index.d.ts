import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers';
export interface IRateProps extends IConfigurableFormComponent {
    value?: number;
    defaultValue?: number;
    allowClear?: boolean;
    allowHalf?: boolean;
    icon?: string;
    count?: number;
    tooltips?: string[];
    onChange?: (value: number) => void;
    className?: string;
}
declare const RateComponent: IToolboxComponent<IRateProps>;
export default RateComponent;
