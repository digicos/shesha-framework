import { CSSProperties, FC, ReactNode } from 'react';
import { IConfigurableFormComponent } from '../../../providers/form/models';
import { IComponentsContainerBaseProps } from '../../../interfaces';
import { ICommonContainerProps } from '../../../designer-components/container/interfaces';
export interface IComponentsContainerProps extends IComponentsContainerBaseProps, ICommonContainerProps {
    className?: string;
    render?: (components: JSX.Element[]) => ReactNode;
    itemsLimit?: number;
    dynamicComponents?: IConfigurableFormComponent[];
    wrapperStyle?: CSSProperties;
    style?: CSSProperties;
}
declare const ComponentsContainer: FC<IComponentsContainerProps>;
export default ComponentsContainer;
