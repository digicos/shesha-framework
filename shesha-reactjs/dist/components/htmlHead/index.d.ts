import { FC } from 'react';
export interface IHtmlHeadProps {
    readonly title?: string;
    readonly description?: string;
    readonly url?: string;
    readonly ogImage?: string;
}
declare const HtmlHead: FC<IHtmlHeadProps>;
export default HtmlHead;
