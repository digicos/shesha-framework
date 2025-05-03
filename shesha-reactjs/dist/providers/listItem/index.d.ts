import { FC, PropsWithChildren } from 'react';
import { IListItemState } from './context';
declare const ListItemProvider: FC<PropsWithChildren<IListItemState>>;
declare const useListItemIndex: () => IListItemState;
export { ListItemProvider, useListItemIndex };
export default ListItemProvider;
