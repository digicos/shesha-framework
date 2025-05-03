import React from 'react';
import { IEntityPickerProps } from './models';
export interface IEntityPickerModalProps extends IEntityPickerProps {
    onCloseModal: () => void;
}
export declare const EntityPickerModal: (props: IEntityPickerModalProps) => React.JSX.Element;
