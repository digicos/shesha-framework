import { FC, PropsWithChildren } from 'react';
import { IRouter } from '../../providers/shaRouting';
import { FormIdentifier, ThemeProviderProps } from '../../providers';
import { ISheshaApplication, ISheshaApplicationStateContext, ISheshaRutes } from './contexts';
import { useApplicationPlugin, usePublicApplicationApi } from './context/applicationContext';
export interface IShaApplicationProviderProps {
    backendUrl: string;
    applicationName?: string;
    accessTokenName?: string;
    router?: IRouter;
    unauthorizedRedirectUrl?: string;
    themeProps?: ThemeProviderProps;
    routes?: ISheshaRutes;
    noAuth?: boolean;
    homePageUrl?: string;
    /**
     * Unique identifier (key) of the front-end application, is used to separate some settings and application parts when use multiple front-ends
     */
    applicationKey?: string;
    getFormUrlFunc?: (formId: FormIdentifier) => string;
}
declare const ShaApplicationProvider: FC<PropsWithChildren<IShaApplicationProviderProps>>;
declare const useSheshaApplicationState: (require?: boolean) => ISheshaApplicationStateContext;
declare const useSheshaApplication: (require?: boolean) => ISheshaApplication;
export { ShaApplicationProvider, useSheshaApplication, useSheshaApplicationState, useApplicationPlugin, usePublicApplicationApi };
