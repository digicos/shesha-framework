import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
export interface IAutocompleteTagsOutlinedComponentProps extends IConfigurableFormComponent {
    value?: string[];
    defaultValue?: string;
    autocompleteUrl: string;
    onChange?: (values?: string[]) => void;
}
declare const AutocompleteTagGroupComponent: IToolboxComponent<IAutocompleteTagsOutlinedComponentProps>;
export default AutocompleteTagGroupComponent;
