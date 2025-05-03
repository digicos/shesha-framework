import { IConfigurableFormComponent } from '../../providers/form/models';
import { IToolboxComponent } from '../../interfaces';
export interface ISortingEditorComponentProps extends IConfigurableFormComponent {
    modelType: string;
}
export declare const SortingEditorComponent: IToolboxComponent<ISortingEditorComponentProps>;
