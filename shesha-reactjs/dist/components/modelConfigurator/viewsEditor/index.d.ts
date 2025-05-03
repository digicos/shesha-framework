import { FC } from 'react';
import { EntityViewConfigurationDto } from '../../../apis/modelConfigurations';
interface IViewsEditorProps {
    value?: EntityViewConfigurationDto[];
    onChange?: (value: EntityViewConfigurationDto[]) => void;
}
export declare const ViewsEditorComponent: FC<IViewsEditorProps>;
export {};
