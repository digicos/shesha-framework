import { FC, PropsWithChildren } from 'react';
import { IConfigurableFormComponent } from '../../interfaces';
export type Direction = 'horizontal' | 'vertical';
export interface IProps {
    components: IConfigurableFormComponent[];
    direction?: Direction;
    justifyContent?: string;
    className?: string;
}
declare const DynamicContainer: FC<PropsWithChildren<IProps>>;
export default DynamicContainer;
