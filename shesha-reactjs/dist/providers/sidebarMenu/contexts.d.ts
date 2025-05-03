import { IFlagsSetters } from '../../interfaces/flagsSetters';
import { IFlagsState } from '../../interfaces/flagsState';
import { ISidebarMenuItem } from '../../interfaces/sidebar';
import { IHeaderAction } from './models';
export type IFlagProgressFlags = 'fetchFileInfo';
export type IFlagSucceededFlags = 'fetchFileInfo';
export type IFlagErrorFlags = 'fetchFileInfo';
export type IFlagActionedFlags = '__DEFAULT__';
export interface ISidebarMenuStateContext extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    isExpanded: boolean;
    actions?: IHeaderAction[];
    accountDropdownListItems?: IHeaderAction[];
    items: ISidebarMenuItem[];
}
export interface ISidebarMenuActionsContext extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    expand: () => void;
    collapse: () => void;
}
export declare const SIDEBAR_MENU_CONTEXT_INITIAL_STATE: ISidebarMenuStateContext;
export declare const SidebarMenuStateContext: import("react").Context<ISidebarMenuStateContext>;
export declare const SidebarMenuActionsContext: import("react").Context<ISidebarMenuActionsContext>;
export interface ISidebarMenuDefaultsContext {
    items: ISidebarMenuItem[];
}
export declare const SidebarMenuDefaultsContext: import("react").Context<ISidebarMenuDefaultsContext>;
