import { IConfigurableMainMenu } from './contexts';
import { ISidebarMenuItem } from '../../interfaces/sidebar';
export declare enum MainMenuActionEnums {
    SetLoadedMenu = "SET_LOADED_MENU",
    SetItems = "SET_ITEMS"
}
export declare const setLoadedMenuAction: import("redux-actions").ActionFunction1<IConfigurableMainMenu, import("redux-actions").Action<IConfigurableMainMenu>>;
export declare const setItemsAction: import("redux-actions").ActionFunction1<ISidebarMenuItem[], import("redux-actions").Action<ISidebarMenuItem[]>>;
