import { FormRawMarkup, IFormSettings } from "../../interfaces";
import { CrudMode } from "../../providers/crudContext/models";
import { FC } from "react";
export interface IDataListItemProps {
    listId: string;
    listName?: string;
    itemIndex: number;
    itemId?: any;
    allowEdit: boolean;
    updater?: (data: any) => Promise<any>;
    allowDelete: boolean;
    deleter?: () => Promise<any>;
    editMode: CrudMode;
    data?: any;
    markup: FormRawMarkup;
    formSettings: IFormSettings;
    allowChangeEditMode: boolean;
    autoSave?: boolean;
    isNewObject: boolean;
}
export declare const DataListItemRenderer: FC<IDataListItemProps>;
