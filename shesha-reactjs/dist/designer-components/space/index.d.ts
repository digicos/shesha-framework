import { IConfigurableFormComponent, IToolboxComponent } from '../../interfaces/formDesigner';
export interface ISpaceProps extends IConfigurableFormComponent {
    align?: 'start' | 'end' | 'center' | 'baseline';
    direction?: 'vertical' | 'horizontal';
    size?: 'small' | 'middle' | 'large';
    wrap?: boolean;
    sizeNumber?: number;
    marginLeft?: number;
    marginRight?: number;
}
declare const SpaceComponent: IToolboxComponent<ISpaceProps>;
export default SpaceComponent;
