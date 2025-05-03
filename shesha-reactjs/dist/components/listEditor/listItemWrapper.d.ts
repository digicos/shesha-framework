import { FC, PropsWithChildren } from 'react';
export type ItemInsertPosition = 'before' | 'after';
export interface IListItemWrapperProps extends PropsWithChildren {
    onDelete: () => void;
    onDragHandleClick: () => void;
    onInsert: (insertPosition: ItemInsertPosition) => void;
    readOnly?: boolean;
    isLast: boolean;
    className?: string;
}
export declare const ListItemWrapper: FC<IListItemWrapperProps>;
