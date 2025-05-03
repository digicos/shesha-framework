import { FormIdentifier } from "../../../interfaces";
import { IShowModalActionArguments } from "../configurable-actions/show-dialog-arguments";
import { IKeyValue } from "../../../interfaces/keyValue";
import { ButtonGroupItemProps } from "../../../providers/buttonGroupConfigurator";
import { ModalFooterButtons } from "../models";
export interface IShowModalActionArgumentsV0 {
    modalTitle: string;
    formId: FormIdentifier;
    formMode?: 'edit' | 'readonly';
    additionalProperties?: IKeyValue[];
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
export declare const migrateToV0: (prev: IShowModalActionArgumentsV0) => IShowModalActionArguments;
