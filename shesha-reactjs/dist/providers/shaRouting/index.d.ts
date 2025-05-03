import { FC, PropsWithChildren } from 'react';
import { FormIdentifier } from '../../interfaces';
import { IConfigurableActionConfiguration } from '../../providers/configurableActionsDispatcher';
import { IKeyValue } from '../../interfaces/keyValue';
import { ShaRouting } from './contexts';
export type NavigationType = 'url' | 'form';
interface IRouter {
    push(href: string): void;
    /**
     * Navigate to the previous history entry.
     */
    back(): void;
    query: NodeJS.Dict<string | string[]>;
    fullPath: string;
    queryString: string;
    path: string;
}
export interface INavigateActoinArguments {
    navigationType: NavigationType;
    url?: string;
    formId?: FormIdentifier;
    queryParameters?: IKeyValue[];
}
interface ShaRoutingProviderProps {
    router: IRouter;
    getFormUrlFunc?: (formId: FormIdentifier, isLoggedIn: boolean) => string;
    getIsLoggedIn: () => boolean;
}
declare const ShaRoutingProvider: FC<PropsWithChildren<ShaRoutingProviderProps>>;
declare function useShaRoutingState(require?: boolean): import("./contexts").IShaRoutingStateContext;
declare function useShaRoutingActions(require?: boolean): import("./contexts").IShaRoutingActionsContext;
declare const useShaRouting: (require?: boolean) => ShaRouting;
declare const isNavigationActionConfiguration: (actionConfig: IConfigurableActionConfiguration) => actionConfig is IConfigurableActionConfiguration<INavigateActoinArguments>;
export { ShaRoutingProvider, useShaRouting, useShaRoutingActions, useShaRoutingState, isNavigationActionConfiguration, type IRouter };
