import { FC, PropsWithChildren } from 'react';
import { IHeaderAction } from './models';
import { ISidebarMenuItem } from '../../interfaces/sidebar';
export interface ISidebarMenuProviderProps {
    items: ISidebarMenuItem[];
    actions?: IHeaderAction[];
    accountDropdownListItems?: IHeaderAction[];
}
declare const SidebarMenuProvider: FC<PropsWithChildren<ISidebarMenuProviderProps>>;
declare function useSidebarMenuState(require: boolean): {
    expand: () => void;
    collapse: () => void;
    setIsInProgressFlag: (key: {
        fetchFileInfo?: boolean;
    }) => void;
    setSucceededFlag: (key: {
        fetchFileInfo?: boolean;
    }) => void;
    setFailedFlag: (key: {
        fetchFileInfo?: boolean;
    }) => void;
    setActionedFlag: (key: {
        __DEFAULT__?: boolean;
    }) => void;
    resetIsInProgressFlag: () => void;
    resetSucceededFlag: () => void;
    resetFailedFlag: () => void;
    resetActionedFlag: () => void;
    resetAllFlag: () => void;
    isExpanded: boolean;
    actions?: IHeaderAction[];
    accountDropdownListItems?: IHeaderAction[];
    items: ISidebarMenuItem[];
    isInProgress?: {
        fetchFileInfo?: boolean;
    };
    succeeded?: {
        fetchFileInfo?: boolean;
    };
    error?: {
        fetchFileInfo?: string | boolean | import("../..").IErrorInfo;
    };
    actioned?: {
        __DEFAULT__?: boolean;
    };
};
declare function useSidebarMenuActions(require: boolean): import("./contexts").ISidebarMenuActionsContext;
declare function useSidebarMenu(require?: boolean): {
    expand: () => void;
    collapse: () => void;
    setIsInProgressFlag: (key: {
        fetchFileInfo?: boolean;
    }) => void;
    setSucceededFlag: (key: {
        fetchFileInfo?: boolean;
    }) => void;
    setFailedFlag: (key: {
        fetchFileInfo?: boolean;
    }) => void;
    setActionedFlag: (key: {
        __DEFAULT__?: boolean;
    }) => void;
    resetIsInProgressFlag: () => void;
    resetSucceededFlag: () => void;
    resetFailedFlag: () => void;
    resetActionedFlag: () => void;
    resetAllFlag: () => void;
    isExpanded: boolean;
    actions?: IHeaderAction[];
    accountDropdownListItems?: IHeaderAction[];
    items: ISidebarMenuItem[];
    isInProgress?: {
        fetchFileInfo?: boolean;
    };
    succeeded?: {
        fetchFileInfo?: boolean;
    };
    error?: {
        fetchFileInfo?: string | boolean | import("../..").IErrorInfo;
    };
    actioned?: {
        __DEFAULT__?: boolean;
    };
};
export interface ISidebarMenuDefaultsProviderProps {
    items: ISidebarMenuItem[];
}
declare const SidebarMenuDefaultsProvider: FC<PropsWithChildren<ISidebarMenuDefaultsProviderProps>>;
declare function useSidebarMenuDefaults(): import("./contexts").ISidebarMenuDefaultsContext;
export { SidebarMenuDefaultsProvider, SidebarMenuProvider, useSidebarMenu, useSidebarMenuActions, // note: to be removed
useSidebarMenuDefaults, useSidebarMenuState, type IHeaderAction, type ISidebarMenuItem, };
