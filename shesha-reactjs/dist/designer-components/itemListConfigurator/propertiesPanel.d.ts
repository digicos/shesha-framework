import { ListItemWithId } from '../../components/listEditor/models';
import { ItemPropertiesRendererProps } from '../../components/listEditorWithPropertiesPanel';
import React from 'react';
import { ItemSettingsMarkupFactory } from './interfaces';
export interface IPropertiesPanelProps<TItem extends ListItemWithId> extends ItemPropertiesRendererProps<TItem> {
    settingsMarkupFactory: ItemSettingsMarkupFactory<TItem>;
}
export declare const PropertiesPanel: <TItem extends ListItemWithId>(props: IPropertiesPanelProps<TItem>) => React.JSX.Element;
