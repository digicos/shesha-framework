import { IConfigurableFormComponent, IToolboxComponent } from '../../../interfaces/formDesigner';
export interface IDividerProps extends IConfigurableFormComponent {
    dividerType?: 'horizontal' | 'vertical';
    dashed?: boolean;
}
declare const DividerComponent: IToolboxComponent<IDividerProps>;
export default DividerComponent;
