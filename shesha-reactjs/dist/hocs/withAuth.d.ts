import React, { ComponentType, FC } from 'react';
export interface IComponentWithAuthProps {
    unauthorizedRedirectUrl: string;
    landingPage: string;
    children: (query: NodeJS.Dict<string | string[]>) => React.ReactElement;
}
export declare const ComponentWithAuth: FC<IComponentWithAuthProps>;
/**
 * Ensures that a particular page cannot be accessed if you're not authenticated
 */
export declare const withAuth: <P extends object>(Component: ComponentType<P>, unauthorizedRedirectUrl?: string, landingPage?: string) => FC<P>;
