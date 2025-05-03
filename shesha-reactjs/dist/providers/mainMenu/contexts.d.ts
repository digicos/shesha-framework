import { ISidebarMenuItem } from '../../interfaces/sidebar';
export interface IConfigurableMainMenu {
    items: ISidebarMenuItem[];
    version?: number;
}
export interface IMainMenuStateContext {
    loadedMenu?: IConfigurableMainMenu;
    items?: ISidebarMenuItem[];
}
export interface IMainMenuActionsContext {
    changeMainMenu: (mainMenu: IConfigurableMainMenu) => void;
    saveMainMenu: (mainMenu: IConfigurableMainMenu) => Promise<void>;
}
export declare const MAIN_MENU_CONTEXT_INITIAL_STATE: IMainMenuStateContext;
export declare const MainMenuStateContext: import("react").Context<IMainMenuStateContext>;
export declare const MainMenuActionsContext: import("react").Context<IMainMenuActionsContext>;
