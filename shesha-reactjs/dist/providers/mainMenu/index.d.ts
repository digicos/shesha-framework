import { FC, PropsWithChildren } from 'react';
import { IConfigurableMainMenu } from './contexts';
import { ISidebarMenuItem } from '../../interfaces/sidebar';
export interface MainMenuProviderProps {
    mainMenuConfigKey?: string;
}
declare const MainMenuProvider: FC<PropsWithChildren<MainMenuProviderProps>>;
declare function useMainMenuState(): import("./contexts").IMainMenuStateContext;
declare function useMainMenuActions(): import("./contexts").IMainMenuActionsContext;
declare function useMainMenu(): {
    changeMainMenu: (mainMenu: IConfigurableMainMenu) => void;
    saveMainMenu: (mainMenu: IConfigurableMainMenu) => Promise<void>;
    loadedMenu?: IConfigurableMainMenu;
    items?: ISidebarMenuItem[];
};
export { MainMenuProvider, useMainMenu, useMainMenuActions, useMainMenuState, type IConfigurableMainMenu };
