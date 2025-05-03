import { IToolboxComponent } from '../../interfaces';
import { ButtonGroupItemProps } from '../../providers';
import { IConfigurableColumnsProps } from '../../providers/datatableColumnsConfigurator/models';
import { FormIdentifier, IConfigurableFormComponent } from '../../providers/form/models';
import { ModalFooterButtons } from '../../providers/dynamicModal/models';
export interface IEntityPickerComponentProps extends IConfigurableFormComponent {
    placeholder?: string;
    items: IConfigurableColumnsProps[];
    hideBorder?: boolean;
    valueFormat?: 'simple' | 'entityReference' | 'custom';
    incomeCustomJs?: string;
    outcomeCustomJs?: string;
    mode?: 'single' | 'multiple' | 'tags';
    entityType: string;
    filters?: object;
    title?: string;
    displayEntityKey?: string;
    allowNewRecord?: boolean;
    modalFormId?: FormIdentifier;
    modalTitle?: string;
    showModalFooter?: boolean;
    modalWidth?: number | string | 'custom';
    customWidth?: number;
    widthUnits?: string;
    buttons?: ButtonGroupItemProps[];
    footerButtons?: ModalFooterButtons;
}
declare const EntityPickerComponent: IToolboxComponent<IEntityPickerComponentProps>;
export default EntityPickerComponent;
