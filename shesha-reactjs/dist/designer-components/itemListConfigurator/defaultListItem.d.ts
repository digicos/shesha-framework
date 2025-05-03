import { FC } from 'react';
import { DefaultItemRenderingProps } from './interfaces';
export interface IListItemProps {
    item: DefaultItemRenderingProps;
    actualModelContext?: any;
}
export declare const DefaultListItem: FC<IListItemProps>;
