import { TagProps } from 'antd';
import { FC } from 'react';
type TagWithText = {
    text: string;
} & TagProps;
export interface ITagProps {
    title?: string;
    tag: string | TagWithText;
}
export declare const PageHeaderTag: FC<ITagProps>;
export default PageHeaderTag;
