import { FC } from 'react';
import { IConfigurableFormComponent } from '../../providers/form/models';
import { IStylable } from '../../interfaces';
import { ISubFormProviderProps } from '../../providers/subForm/interfaces';
export interface ISubFormComponentProps extends Omit<ISubFormProviderProps, 'labelCol' | 'wrapperCol'>, IConfigurableFormComponent {
    labelCol?: number;
    wrapperCol?: number;
}
interface ISubFormWrapperProps extends Omit<ISubFormComponentProps, 'id' | 'type' | 'style' | 'labelCol' | 'wrapperCol'>, IStylable {
    id: string;
}
export declare const SubFormWrapper: FC<ISubFormWrapperProps>;
export {};
