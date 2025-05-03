import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../index';
export interface IMainMenuEditorComponentProps extends IConfigurableFormComponent {
    height?: string;
}
declare const MainMenuEditorComponent: IToolboxComponent<IMainMenuEditorComponentProps>;
export default MainMenuEditorComponent;
