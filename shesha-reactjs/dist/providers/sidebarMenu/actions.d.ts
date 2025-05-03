import { ISidebarMenuItem } from '../../interfaces/sidebar';
export declare enum SidebarMenuActionEnums {
    ToggleSidebar = "TOGGLE_SIDEBAR",
    SetItems = "SET_ITEMS"
}
export declare const toggleSidebarAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const setItemsAction: import("redux-actions").ActionFunction1<ISidebarMenuItem[], import("redux-actions").Action<ISidebarMenuItem[]>>;
