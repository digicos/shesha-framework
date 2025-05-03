import { IConfigurableFormComponent, IToolboxComponent } from '../../interfaces/formDesigner';
import { IStatusTagProps as ITagProps } from '../../components/statusTag';
export interface IStatusTagProps extends Omit<ITagProps, 'mappings' | 'style'>, IConfigurableFormComponent {
    mappings?: string;
    valueSource?: 'form' | 'manual';
}
declare const StatusTagComponent: IToolboxComponent<IStatusTagProps>;
export default StatusTagComponent;
