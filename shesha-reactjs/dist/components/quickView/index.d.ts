import { FC, PropsWithChildren } from 'react';
import { PopoverProps } from 'antd';
import { FormIdentifier } from '../../providers/form/models';
export interface IQuickViewProps extends PropsWithChildren {
    /** The id or guid for the entity */
    entityId?: string;
    /** Identifier of the form to display on the modal */
    formIdentifier?: FormIdentifier;
    /** The Url that details of the entity are retreived */
    getEntityUrl?: string;
    /** The property froom the data to use as the label and title for the popover */
    displayProperty: string;
    /** Metadata properties of value */
    dataProperties?: {
        [key in string]: any;
    }[];
    /** The width of the quickview */
    width?: number;
    className?: string;
    formType?: string;
    displayName?: string;
    initialFormData?: any;
    popoverProps?: PopoverProps;
    disabled?: boolean;
    style?: string;
}
declare const QuickView: FC<Omit<IQuickViewProps, 'formType'>>;
export declare const GenericQuickView: FC<IQuickViewProps>;
export default QuickView;
