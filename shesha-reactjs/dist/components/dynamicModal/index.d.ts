import { FC } from 'react';
import { IModalWithConfigurableFormProps, IModalWithContentProps } from '../../providers/dynamicModal/models';
export interface IDynamicModalWithContentProps extends IModalWithContentProps {
    isVisible: boolean;
    isSubmitted?: boolean;
    onCancel?: () => void;
    onOk?: () => void;
}
export declare const DynamicModalWithContent: FC<IDynamicModalWithContentProps>;
export interface IDynamicModalWithFormProps extends Omit<IModalWithConfigurableFormProps, 'fetchUrl'> {
    isVisible: boolean;
}
export declare const DynamicModalWithForm: FC<IDynamicModalWithFormProps>;
type DynamicModalProps = IDynamicModalWithContentProps | IDynamicModalWithFormProps;
export declare const DynamicModal: FC<DynamicModalProps>;
export default DynamicModal;
