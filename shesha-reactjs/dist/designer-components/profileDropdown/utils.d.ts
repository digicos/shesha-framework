import { IButtonGroup, IConfigurableActionConfiguration, IHeaderAction } from '../../index';
import { IAuthActionsContext } from '../../providers/auth/contexts';
import { ItemType } from 'antd/es/menu/interface';
export declare const getMenuItem: (items: IButtonGroup[], execute: (payload: IConfigurableActionConfiguration) => void) => ItemType[];
export declare const getAccountMenuItems: (accountDropdownListItems: IHeaderAction[], logoutUser: IAuthActionsContext["logoutUser"]) => ItemType[];
