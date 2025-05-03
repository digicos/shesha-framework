import React, { FC, PropsWithChildren } from 'react';
import { IUpdateChildItemsPayload, IUpdateItemSettingsPayload } from './contexts';
import { IModelItem } from '../../../../interfaces/modelConfigurator';
export interface IPropertiesEditorProviderProps {
    id?: string;
    items: IModelItem[];
    onChange?: (items: IModelItem[]) => void;
}
declare const PropertiesEditorProvider: FC<PropsWithChildren<IPropertiesEditorProviderProps>>;
declare function usePropertiesEditor(): {
    addItem: (parentId?: string) => Promise<IModelItem>;
    deleteItem: (uid: string) => void;
    selectItem: (uid: string) => void;
    updateChildItems: (payload: IUpdateChildItemsPayload) => void;
    getItem: (uid: string) => IModelItem;
    updateItem: (payload: IUpdateItemSettingsPayload) => void;
    items: IModelItem[];
    selectedItemId?: string;
    onChange?: (items: IModelItem[]) => void;
    selectedItemRef?: React.MutableRefObject<any>;
};
export { PropertiesEditorProvider, usePropertiesEditor };
