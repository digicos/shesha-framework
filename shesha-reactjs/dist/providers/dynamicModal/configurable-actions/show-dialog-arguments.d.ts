import { FormIdentifier, FormMarkup } from '../../form/models';
import { ButtonGroupItemProps } from '../../../index';
import { ModalFooterButtons } from '../models';
export interface IShowModalActionArguments {
    modalTitle: string;
    formId: FormIdentifier;
    formMode?: 'edit' | 'readonly';
    formArguments?: string;
    modalWidth?: number | string;
    customWidth?: number;
    widthUnits?: '%' | 'px';
    buttons?: ButtonGroupItemProps[];
    footerButtons?: ModalFooterButtons;
    showModalFooter?: boolean;
    /**
     * What http verb to use when submitting the form. Used in conjunction with `showModalFooter`
     */
    submitHttpVerb?: 'POST' | 'PUT';
}
export declare const dialogArgumentsForm: FormMarkup;
