export declare const STORED_FILES_DELAYED_UPDATE: string;
export interface IDelayedUpdateItem {
    id: any;
    data?: any;
}
export interface IDelayedUpdateGroup {
    name: string;
    items: IDelayedUpdateItem[];
}
