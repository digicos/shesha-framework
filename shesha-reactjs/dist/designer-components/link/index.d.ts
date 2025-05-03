import { ReactNode } from 'react';
import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
import { AlignItems, JustifyContent, JustifyItems } from '../../designer-components/container/interfaces';
import { ContainerDirection } from '../../components/formDesigner/common/interfaces';
export interface IAlertProps extends IConfigurableFormComponent {
    text: string;
    description?: string;
    showIcon?: boolean;
    icon?: string;
}
export interface ILinkProps extends IConfigurableFormComponent {
    href?: string;
    content?: string;
    propertyName: string;
    target?: string;
    download?: string;
    direction?: ContainerDirection;
    hasChildren?: boolean;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    justifyItems?: JustifyItems;
    className?: string;
    icon?: ReactNode;
    components?: IConfigurableFormComponent[];
}
declare const LinkComponent: IToolboxComponent<ILinkProps>;
export default LinkComponent;
