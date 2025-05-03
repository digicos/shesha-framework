import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
export interface INotesProps extends IConfigurableFormComponent {
    ownerId: string;
    ownerType: string;
    ownerIdExpression: string;
    ownerTypeExpression: string;
    savePlacement?: 'left' | 'right';
    autoSize?: boolean;
    allowDelete?: boolean;
}
declare const NotesComponent: IToolboxComponent<INotesProps>;
export default NotesComponent;
