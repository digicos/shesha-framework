import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
export interface IValidationErrorsComponentProps extends IConfigurableFormComponent {
    className?: string;
}
declare const ValidationErrorsComponent: IToolboxComponent<IValidationErrorsComponentProps>;
export default ValidationErrorsComponent;
