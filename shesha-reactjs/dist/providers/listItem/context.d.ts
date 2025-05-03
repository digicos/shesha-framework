import { ColProps } from 'antd';
export interface IListItemState {
    index?: number;
    prefix?: string;
    layout?: {
        labelCol?: ColProps;
        wrapperCol?: ColProps;
    };
}
export declare const ListItemContext: import("react").Context<IListItemState>;
