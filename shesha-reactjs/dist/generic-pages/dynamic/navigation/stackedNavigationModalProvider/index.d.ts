import { FC, PropsWithChildren } from 'react';
export interface StackedNavigationModalProviderProps {
    isMaxWidth?: boolean;
    parentId?: string;
}
declare const StackedNavigationModalProvider: FC<PropsWithChildren<StackedNavigationModalProviderProps>>;
declare function useStackedModal(): import("./contexts").IStackedNavigationModalStateContext;
export { StackedNavigationModalProvider, useStackedModal };
