import { IButtonComponentProps } from '../interfaces';
import { ReactNode } from 'react';
import { SettingsMigrationContext } from '../../../interfaces';
type ButtonActionTypeV0 = 'navigate' | 'dialogue' | 'executeScript' | 'executeFormAction' | 'customAction' | 'submit' | 'reset' | 'startFormEdit' | 'cancelFormEdit' | 'dispatchAnEvent';
type ToolbarItemSubTypeV0 = 'button' | 'separator' | 'line';
type SizeTypeV0 = 'small' | 'middle' | 'large';
type ButtonGroupItemTypeV0 = 'item' | 'group';
type ButtonGroupTypeV0 = 'inline' | 'dropdown';
type ButtonTypeV0 = "default" | "primary" | "ghost" | "dashed" | "link" | "text";
export interface IButtonGroupItemBaseV0 {
    id: string;
    name: string;
    label?: string | ReactNode;
    tooltip?: string;
    sortOrder: number;
    danger?: boolean;
    hidden?: boolean;
    disabled?: boolean;
    isDynamic?: boolean;
    itemType: ButtonGroupItemTypeV0;
    groupType?: ButtonGroupTypeV0;
    icon?: string;
    buttonType?: ButtonTypeV0;
    customVisibility?: string;
    customEnabled?: string;
    permissions?: string[];
    style?: string;
    size?: SizeTypeV0;
}
interface IButtonGroupButtonV0 extends IButtonGroupItemBaseV0 {
    itemSubType: ToolbarItemSubTypeV0;
    buttonAction?: ButtonActionTypeV0;
    refreshTableOnSuccess?: boolean;
    targetUrl?: string;
    /**
     * Predefined form action that gets executed via events
     */
    formAction?: string;
    /**
     * Custom form events that can be passed with parameters
     */
    customFormAction?: string;
    uniqueStateId?: string;
    customAction?: string;
    customActionParameters?: string;
    actionScript?: string;
    size?: SizeTypeV0;
    modalFormId?: string;
    modalTitle?: string;
    modalFormMode?: 'designer' | 'edit' | 'readonly';
    skipFetchData?: boolean;
    submitLocally?: boolean;
    onSubmitEvent?: string;
    /** An event name to dispatch on the click of a button */
    eventName?: string;
    /** The string representing a custom event name to dispatch when the button has been dispatched
     * in case we forgot to include it in the `eventName` dropdown
     */
    customEventNameToDispatch?: string;
    modalWidth?: number;
    modalActionOnSuccess?: 'keepOpen' | 'navigateToUrl' | 'close' | undefined;
    showConfirmDialogBeforeSubmit?: boolean;
    modalConfirmDialogMessage?: string;
    onSuccessScript?: string;
    onErrorScript?: string;
}
export declare const migrateV0toV1: (props: IButtonGroupButtonV0, context: SettingsMigrationContext) => IButtonComponentProps;
export {};
