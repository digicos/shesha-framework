import { ColProps } from 'antd';
export interface IFormItemStateContext {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
    namePrefix?: string;
}
export interface IFormItemActionsContext {
}
export declare const FORM_ITEM_CONTEXT_INITIAL_STATE: IFormItemStateContext;
export declare const FormItemStateContext: import("react").Context<IFormItemStateContext>;
export declare const FormItemActionsContext: import("react").Context<IFormItemActionsContext>;
