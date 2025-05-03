import { IEntityReferenceProps } from '../../components/entityReference';
import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
export type IActionParameters = [{
    key: string;
    value: string;
}];
export interface IEntityReferenceControlProps extends IEntityReferenceProps, IConfigurableFormComponent {
}
declare const EntityReferenceComponent: IToolboxComponent<IEntityReferenceControlProps>;
export default EntityReferenceComponent;
