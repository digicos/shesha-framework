import { IConfigurableFormComponent, SettingsMigrationContext } from '../../../../interfaces/formDesigner';
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse';
import { CollapsibleType } from 'antd/lib/collapse/CollapsePanel';
import { IChildTableComponentProps } from '../index';
export interface IPanelContent {
    id: string;
    components?: IConfigurableFormComponent[];
}
export interface IPanelComponentProps extends IConfigurableFormComponent {
    collapsedByDefault?: boolean;
    expandIconPosition?: ExpandIconPosition | 'hide';
    header?: IPanelContent;
    content?: IPanelContent;
    collapsible?: CollapsibleType;
    ghost?: boolean;
    hideWhenEmpty?: boolean;
    className?: string;
}
export declare const migrateToTable: (props: IChildTableComponentProps, context: SettingsMigrationContext) => IPanelComponentProps;
