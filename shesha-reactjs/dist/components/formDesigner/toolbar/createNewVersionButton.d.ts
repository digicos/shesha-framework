import { FC } from 'react';
import { FormConfigurationDto } from '../../../providers/form/api';
export interface ICreateNewVersionButtonProps {
    onSuccess: (formDto: FormConfigurationDto) => void;
}
export declare const CreateNewVersionButton: FC<ICreateNewVersionButtonProps>;
