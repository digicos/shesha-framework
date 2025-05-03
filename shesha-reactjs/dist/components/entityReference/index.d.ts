import { FC } from 'react';
import { IConfigurableActionConfiguration } from '../../interfaces/configurableAction';
import { IKeyValue } from '../../interfaces/keyValue';
import { ButtonGroupItemProps, FormIdentifier } from '../../providers';
import { ModalFooterButtons } from '../../providers/dynamicModal/models';
export type EntityReferenceTypes = 'NavigateLink' | 'Quickview' | 'Dialog';
export interface IEntityReferenceProps {
    entityReferenceType: EntityReferenceTypes;
    value?: any;
    disabled?: boolean;
    placeholder?: string;
    entityType?: string;
    formSelectionMode: 'name' | 'dynamic';
    /** The Url that details of the entity are retreived */
    getEntityUrl?: string;
    /** The property froom the data to use as the label and title for the popover */
    displayProperty: string;
    /** From identifier for navigate/dialog/quickview  */
    formIdentifier?: FormIdentifier;
    /** View type for navigate/dialog/quickview  */
    formType?: string;
    quickviewWidth?: number;
    modalTitle?: string;
    showModalFooter?: boolean;
    additionalProperties?: IKeyValue[];
    modalWidth?: number | string;
    customWidth?: number;
    widthUnits?: '%' | 'px';
    footerButtons?: ModalFooterButtons;
    buttons?: ButtonGroupItemProps[];
    /**
     * If specified, the form data will not be fetched, even if the GET Url has query parameters that can be used to fetch the data.
     * This is useful in cases whereby one form is used both for create and edit mode
     */
    skipFetchData?: boolean;
    /** What http verb to use when submitting the form. Used in conjunction with `showModalFooter` */
    submitHttpVerb?: 'POST' | 'PUT';
    handleSuccess: boolean;
    onSuccess?: IConfigurableActionConfiguration;
    handleFail: boolean;
    onFail?: IConfigurableActionConfiguration;
    style?: string;
}
export declare const EntityReference: FC<IEntityReferenceProps>;
