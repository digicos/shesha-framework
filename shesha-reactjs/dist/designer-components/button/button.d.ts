import { IButtonComponentProps } from './interfaces';
import { IToolboxComponent } from '../../interfaces';
export type IActionParameters = [{
    key: string;
    value: string;
}];
declare const ButtonComponent: IToolboxComponent<IButtonComponentProps>;
export default ButtonComponent;
