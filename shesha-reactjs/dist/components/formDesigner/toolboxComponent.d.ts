import { FC } from 'react';
import { IToolboxComponent } from '../../interfaces';
export interface IProps {
    component: IToolboxComponent;
    index: number;
}
declare const ToolbarComponent: FC<IProps>;
export default ToolbarComponent;
