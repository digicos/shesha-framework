import { FC, PropsWithChildren } from 'react';
declare const StackedNavigationProvider: FC<PropsWithChildren<any>>;
declare function useStackedNavigationState(): import("./contexts").IStackedNavigationStateContext;
declare function useStackedNavigationActions(): import("./contexts").IStackedNavigationActionsContext;
declare function useStackedNavigation(): {
    setCurrentNavigator: (navigator: string) => void;
    navigator?: string;
};
export { StackedNavigationProvider, useStackedNavigation, useStackedNavigationActions, useStackedNavigationState };
