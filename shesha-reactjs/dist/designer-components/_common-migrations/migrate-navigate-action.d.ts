import { IConfigurableActionConfiguration } from "../../interfaces/configurableAction";
import { INavigateActoinArguments as INavigateActionArguments } from "../../providers/shaRouting/index";
export declare const getNavigationActionArgumentsByUrl: (url: string) => INavigateActionArguments;
export declare const migrateNavigateAction: (prev: IConfigurableActionConfiguration) => IConfigurableActionConfiguration;
